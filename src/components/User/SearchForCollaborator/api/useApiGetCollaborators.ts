import { CollaboratorsModule } from "@/@types/Collaborators.types";
import { companiesApi } from "@/api/mirantes/companiesApi";
import { isEmailValid } from "@/utilities/helpers/isEmailValid";
import { objToQuery } from "@/utilities/helpers/objToQuery";
import { useDebounce } from "@/utilities/hooks/useDebounce";
import {
  getCompanyId,
  useGetCompanyId,
} from "@/utilities/session/getCompanyId";
import { useQuery } from "@tanstack/react-query";
import { uniqBy } from "lodash";
import { useEffect, useState } from "react";

type TQueryFn = {
  query: string;
  filters: Record<string, string | undefined>;
  limit: number;
  page: number;
};

type TGetCollaboratorsResponse = {
  collaborators: CollaboratorsModule.Collaborator[];
  previousPage: number;
  nextPage: number;
  totalElements: number;
};

const queryFn = async ({ query, filters, ...rest }: TQueryFn) => {
  const companyId = getCompanyId();
  const queriedFilters = objToQuery({
    ...filters,
    ...rest,
    [isEmailValid(query) ? "email" : "name"]: query,
  });

  const response = await companiesApi.get<TGetCollaboratorsResponse>(
    `/companies/${companyId}/collaborators${queriedFilters}`
  );

  return {
    ...response?.data,
    collaborators: response.data?.collaborators?.map((collaborator: any) => ({
      ...collaborator,
      status_entry: false,
    })),
  };
};

type TUseApiGetCollaborators = {
  limit: number;
  currentPage: number;
};

export function useApiGetCollaborators({
  limit,
  currentPage,
}: TUseApiGetCollaborators) {
  const companyId = useGetCompanyId();
  const { value, changeValue, debouncedValue } = useDebounce();
  const [filters, setFilters] = useState<Record<string, string | undefined>>(
    {}
  );

  const onFilter = (key: string, value: string | undefined) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const {
    data,
    refetch,
    isLoading: isGettingCollaborators,
    isRefetching,
  } = useQuery({
    queryFn: () =>
      queryFn({
        limit,
        page: currentPage,
        filters,
        query: debouncedValue,
      }),
    enabled: !!companyId,
    queryKey: [
      "collaborators-board",
      "collaborators",
      debouncedValue,
      filters,
      currentPage,
      limit,
    ],
  });

  let totalOfElement = data?.totalElements ?? 0;

  return {
    totalOfElement,
    collaborators: uniqBy(
      data?.collaborators,
      (collaborator) => collaborator?.user?.id || collaborator?.id
    ),
    hasNextPage: data?.nextPage !== null,
    hasPreviousPage: data?.previousPage !== null,
    isGettingCollaborators: isRefetching || isGettingCollaborators,
    onFilter,
    value,
    filters,
    changeValue,
    numberOfPages: Math.ceil(totalOfElement / limit),
  };
}
