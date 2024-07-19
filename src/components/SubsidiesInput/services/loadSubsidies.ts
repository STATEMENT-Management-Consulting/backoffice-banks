import { companiesApi } from "@/api/mirantes/companiesApi";

export async function loadSubsidies() {
  const { data } = await companiesApi.get(`pe/subsidies?country=Angola`);  
  return data?.subsidies;
}
