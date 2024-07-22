import axios, { AxiosError } from "axios";
import {
  handleHeadersConfig,
  publicHandleHeadersConfig,
} from "./utils/handleHeadersConfig";
import { clearAllCookies } from "@/utilities/session/clearAllCookies";
import { AuthRoutes, Routes } from "@/utilities/routes";
import { saveCookie } from "@/utilities/session/cookieUtils";

export const authApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTHENTICATION_API_URL,
});

authApi.interceptors.request.use(publicHandleHeadersConfig, function (error) {
  return Promise.reject(error);
});

export const authedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTHENTICATION_API_URL,
});

authedApi.interceptors.request.use(handleHeadersConfig, function (error) {
  return Promise.reject(error);
});

authedApi.interceptors.response.use(
  function (config) {
    return config;
  },
  function (
    error: AxiosError<{ body: { name: string } | string; statusCode: number }>
  ) {
    const body =
      (error.response?.data?.body as { name: string })?.name ??
      error.response?.data?.body;

    const status = error?.response?.data?.statusCode;

    const bodyMessages = [
      "invalid signature",
      "Token as expired",
      "User not found",
      "AuthenticationRequired",
    ];

    if (status === 403 && body && bodyMessages.includes(body)) {
      if (body === "Token as expired") {
        saveCookie("session", body);
      }

      clearAllCookies();
      window.location.href = AuthRoutes.signIn;
    }
    return Promise.reject(error);
  }
);
