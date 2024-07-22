import { useRouter } from "next/router";
import { getSavedCookie, saveCookie } from "../session/cookieUtils";
import { useEffect } from "react";

export type Locales = "en" | "pt" | "fr";

export function useLocale() {
  const router = useRouter();
  const locale: Locales =
    (router.locale as Locales) ?? getSavedCookie("language") ?? "en";

  const changeLanguage = (lang: string) => {
    const currentPath = router.asPath;
    const basePath = router.basePath;
    const newPath = currentPath.startsWith(`/${locale}`)
      ? currentPath.replace(`/${locale}`, `/${lang}`)
      : `/${lang}${currentPath}`;
    saveCookie("language", lang);
    window.location.href = `${basePath}${newPath}`;
  };

  useEffect(() => {
    const currentCookieLanguage = getSavedCookie("language");
    if (!currentCookieLanguage) {
      saveCookie("language", locale);
      return;
    }
  }, [locale]);

  return { locale, changeLanguage };
}
