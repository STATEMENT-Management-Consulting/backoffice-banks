import { useEffect } from "react";
import { AppKeys } from "@/utilities/appKeys";
import { useRouter } from "next/router";
import { AuthRoutes } from "@/utilities/routes";
import { usePathname } from "@/utilities/hooks/usePathname";
import { getSavedCookie } from "@/utilities/session/cookieUtils";

export function useLayoutProvider() {
  const { push } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = getSavedCookie(AppKeys.accessToken);
    const refreshToken = getSavedCookie(AppKeys.refreshToken);

    if (accessToken && refreshToken) {
      const companyId = sessionStorage.getItem(AppKeys.companyId);

      if (!companyId && !pathname.includes(AuthRoutes.companies)) {
        push(AuthRoutes.companies);
      } else if (companyId && pathname.includes(AuthRoutes.companies)) {
        push("/");
      }
    } else if (!pathname.includes(AuthRoutes.signIn)) {
      push(AuthRoutes.signIn);
    } else {
      sessionStorage.removeItem(AppKeys.companyId);
    }
  });
}
