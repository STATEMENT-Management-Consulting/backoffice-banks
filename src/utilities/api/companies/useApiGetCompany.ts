import { CompanyModule } from "@/@types/company.types";
import { companiesApi } from "@/api/mirantes/companiesApi";
import { useGetCompanyId } from "@/utilities/session/getCompanyId";
import { useQuery } from "@tanstack/react-query";

const getCompany = async (companyId: string) => {
  const response = await companiesApi.get<{ company: CompanyModule.Company }>(
    `companies/${companyId}`
  );

  return response.data.company;
};

export function useApiGetCompany() {
  const companyId = useGetCompanyId();
  const { data: company, isLoading } = useQuery({
    queryFn: () => getCompany(companyId),
    queryKey: ["profile/company"],
    enabled: !!companyId,
  });

  return {
    company,
    isGettingCompany: isLoading,
  };
}
