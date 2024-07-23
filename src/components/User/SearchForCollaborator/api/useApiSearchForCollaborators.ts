import { CollaboratorsModule } from "@/@types/Collaborators.types";
import { companiesApi } from "@/api/mirantes/companiesApi";
import { useDebounce } from "@/utilities/hooks/useDebounce";
import { useGetCompanyId } from "@/utilities/session/getCompanyId";
import { useQuery } from "@tanstack/react-query";
import uniqBy from "lodash/uniqBy";

type TQueryFn = {
  query: string;
  companyId: string;
};

type TGetCollaboratorsResponse = {
  collaborators: CollaboratorsModule.Collaborator[];
};

const queryFn = async ({ query, companyId }: TQueryFn) => {
  const response = await companiesApi.get<TGetCollaboratorsResponse>(
    `/companies/${companyId}/collaborators?filters=${query}`
  );

  return uniqBy(
    response.data?.collaborators,
    (collaborator) => collaborator?.user?.id
  );
};

export function useApiSearchForCollaborators() {
  const companyId = useGetCompanyId();

  const { value, changeValue, debouncedValue } = useDebounce();

  const { data: collaborators, isLoading: isGettingCollaborators } = useQuery({
    queryFn: () => queryFn({ companyId, query: debouncedValue }),
    queryKey: ["search", "collaborators", debouncedValue],
    enabled: !!debouncedValue && !!companyId,
  });

  return {
    collaborators,
    changeValue,
    value,
    isGettingCollaborators:
      isGettingCollaborators && !!debouncedValue && !!companyId,
  };
}
