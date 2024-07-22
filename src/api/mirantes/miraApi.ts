import axios from "axios";
import { handleHeadersConfig } from "./utils/handleHeadersConfig";

export const miraApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MIRA_API_URL,
});

miraApi.interceptors.request.use(handleHeadersConfig, function (error) {
  return Promise.reject(error);
});
