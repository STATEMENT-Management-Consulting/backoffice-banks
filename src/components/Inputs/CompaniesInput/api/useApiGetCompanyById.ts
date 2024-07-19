import { companiesApi } from "@/api/mirantes/companiesApi";
import { useQuery } from "@tanstack/react-query";

type TCompany = {
  name: string;
  id: string;
};

const getCompanies = async (id: string) => {
  const response = await companiesApi.get<TCompany[]>(`/companies/${id}`);

  return response.data;
};

export function useApiGetCompanyById(id: string) {
  const { data: company, isLoading: isGettingCompany } = useQuery({
    queryKey: ["company", "office"],
    queryFn: () => getCompanies(id),
    cacheTime: 0,
  });

  return { company, isGettingCompany };
}
