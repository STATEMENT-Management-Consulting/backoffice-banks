import { companiesApi } from "@/api/mirantes/companiesApi";
import { useQuery } from "@tanstack/react-query";
import { sortBy } from "lodash";

type TCompany = {
  name: string;
  id: string;
};

const getCompanies = async () => {
  const response = await companiesApi.get<{
    companies: TCompany[];
  }>(`/companies`);

  return response.data.companies;
};

export function useApiGetCompanies() {
  const { data: companies, isLoading: isGettingCompanies } = useQuery({
    queryKey: ["mirantes/companies"],
    queryFn: () => getCompanies(),
    cacheTime: 0,
  });

  return { companies: sortBy(companies, "name", "asc"), isGettingCompanies };
}
