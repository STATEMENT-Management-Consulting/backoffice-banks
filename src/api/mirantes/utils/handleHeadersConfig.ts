import { getCurrentLocale } from "@/utilities/helpers/getCurrentLocale";
import { getSavedCookie } from "@/utilities/session/cookieUtils";
import { getAccessToken } from "@/utilities/session/getAccessToken";
import { getCompanyId } from "@/utilities/session/getCompanyId";
import { InternalAxiosRequestConfig } from "axios";

export function handleHeadersConfig(
  config: InternalAxiosRequestConfig<any>,
  callback?: typeof handleHeadersConfig
): InternalAxiosRequestConfig<any> {
  const accessToken = getAccessToken();
  const companyId = getCompanyId();
  const locale = getSavedCookie("language");

  if (accessToken && config?.headers && !config.headers["x-access-token"]) {
    config.headers["x-access-token"] = accessToken;
    config.headers["x-company-validation"] = companyId;
    config.headers["x-origin"] = "b2b";
    config.headers["x-company-id"] = companyId;
    config.headers["x-lang"] = locale;
  }

  if (callback) return callback(config);

  return config;
}

export function publicHandleHeadersConfig(
  config: InternalAxiosRequestConfig<any>,
  callback?: typeof handleHeadersConfig
): InternalAxiosRequestConfig<any> {
  const locale = getCurrentLocale();

  if (config?.headers && !config.headers["x-access-token"]) {
    config.headers["x-origin"] = "b2b";
    config.headers["x-lang"] = locale;
  }

  if (callback) return callback(config);

  return config;
}
