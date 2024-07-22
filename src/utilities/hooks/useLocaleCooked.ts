import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSavedCookie } from "../session/cookieUtils";
import { useLocale } from "./useLocale";

export default function useLocaleCooked() {
  const { asPath, basePath } = useRouter();
  const { locale } = useLocale();
  const [savedCookieLanguage, setSavedCookieLanguage] = useState(
    getSavedCookie("language")
  );

  useEffect(() => {
    const checkCookieChange = () => {
      const currentCookieLanguage = getSavedCookie("language");

      if (currentCookieLanguage !== savedCookieLanguage) {
        setSavedCookieLanguage(currentCookieLanguage);

        if (currentCookieLanguage?.length && currentCookieLanguage !== locale) {
          const newPath = asPath.startsWith(`/${currentCookieLanguage}`)
            ? asPath.replace(`/${locale}`, `/${currentCookieLanguage}`)
            : `/${currentCookieLanguage}${asPath}`;
          window.location.href = `${basePath}${newPath}`;
        }
      }
    };

    const intervalId = setInterval(checkCookieChange, 1000);

    return () => clearInterval(intervalId);
  }, [savedCookieLanguage, locale, asPath, basePath]);

  return null;
}
