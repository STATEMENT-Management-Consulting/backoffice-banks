import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";
import { getDeepUrlDomain } from "../helpers/urls";

const domainFromEnv = process.env.NEXT_PUBLIC_MIRANTES_DOMAIN;
const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

export function saveCookie(name: string, value: string, options?: OptionsType) {
  const deepDomain = getDeepUrlDomain(window.location.href);
  const domain = deepDomain?.includes(".vercel") ? deepDomain : domainFromEnv;

  setCookie(name, value, {
    sameSite: "lax",
    ...(isDev ? {} : { domain }),
    secure: true,
    ...options,
  });
}

export function destroyCookie(name: string, options?: OptionsType) {
  const deepDomain = getDeepUrlDomain(window.location.href);
  const domain = deepDomain?.includes(".vercel") ? deepDomain : domainFromEnv;

  deleteCookie(name, {
    sameSite: "lax",
    ...(isDev ? {} : { domain }),
    secure: true,
    ...options,
  });
}

export function getSavedCookie(name: string) {
  return getCookie(name);
}
