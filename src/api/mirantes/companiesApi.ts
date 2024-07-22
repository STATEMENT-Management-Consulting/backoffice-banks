import axios from "axios";
import { handleHeadersConfig } from "./utils/handleHeadersConfig";

export const companiesApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COMPANIES_API_URL,
});

companiesApi.interceptors.request.use(handleHeadersConfig, function (error) {
  return Promise.reject(error);
});
