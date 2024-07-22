import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRestrictByLocation } from "./useRestrictByLocation";
import { conditionallyAccessibleRoutes } from "@/layout/root/RootLayoutHeader/RootLayoutNavigation/mainRoutes";

export function useRedirectIfForbidden() {
  const router = useRouter();
  const { isAllowedCountry, isGettingLocation } = useRestrictByLocation();

  useEffect(() => {
    const forbiddenRoutes = isAllowedCountry
      ? []
      : conditionallyAccessibleRoutes.map((route) => route.href);

    const currentRoute = router.pathname;

    if (!isGettingLocation && forbiddenRoutes.includes(currentRoute)) {
      router.push("/");
    }
  }, [isAllowedCountry, router]);

  return { isGettingLocation };
}
