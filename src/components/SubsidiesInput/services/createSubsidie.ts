import { companiesApi } from "@/api/mirantes/companiesApi";
import { ISubsideApiResponse, ISubsidies } from "../types";

export async function createSubside(params: ISubsidies) {
  const data = await companiesApi.post<ISubsideApiResponse>(
    `pe/add-subsidies`,
    params
  );

  return data?.data;
}
