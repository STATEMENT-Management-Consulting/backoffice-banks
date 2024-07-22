import { companiesApi } from "@/api/mirantes/companiesApi";
import { useQuery } from "@tanstack/react-query";

interface CompanyStatus {
  plan: string;
  headhunter: boolean;
  favorite: string;
}

const fetchCompanyStatus = async () => {
  const response = await companiesApi.get<CompanyStatus>("/company-status");

  return response.data;
};

export function useCompanyStatus() {
  const { data: companyStatus, isLoading } = useQuery({
    queryKey: ["companyStatus"],
    queryFn: fetchCompanyStatus,
  });

  return {
    companyStatus: {
      headhunter: true,
    },
    isGettingCompanyStatus: isLoading,
  };
}
