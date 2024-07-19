import {
  alwaysAccessibleRoutes,
  conditionallyAccessibleRoutes,
} from "./mainRoutes";
import styles from "./RootLayoutNavigation.module.css";
import { useRouter } from "next/router";
import { FaHeart } from "react-icons/fa6";
import { useLayoutDictionary } from "locales/t/layout";
import { RootLayoutRoute } from "./components/RootLayoutRoute";
import { useRestrictByLocation } from "@/control/useRestrictByLocation";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useComponentsDictionary } from "locales/t/components";
import Tooltip from "@/components/Tooltip/Tooltip";

export function RootLayoutNavigation() {
  const t = useLayoutDictionary();
  const componentsTranslation = useComponentsDictionary();
  const { company, isGettingCompany } = useApiGetCompany();
  const { asPath: pathname } = useRouter();
  const { isAllowedCountry } = useRestrictByLocation();
  const routes = [
    ...alwaysAccessibleRoutes,
    ...(isAllowedCountry ? conditionallyAccessibleRoutes : []),
  ];

  const getRouteName = (base: string) => t(`routes.${base}.name` as any);

  const isCurrentRoute = (href: string) =>
    href === "/"
      ? pathname === href
      : "/" !== pathname && pathname.startsWith(href);

  return (
    <div className="flex items-center gap-x-2">
      <nav className="RouteContainer flex gap-x-2 relative">
        {routes
          .filter((route) => route.breakpoint === "main")
          .map((route) => (
            <RootLayoutRoute
              key={route.href}
              {...route}
              name={getRouteName(route.href)}
              href={route.redirect ?? route.href}
              isCurrent={isCurrentRoute(route.href)}
            />
          ))}
      </nav>
      {!isGettingCompany && pathname.includes("/recruitment") && (
        <Tooltip label={componentsTranslation("Favorite.tool-tip")}>
          <div
            className={`flex items-center gap-x-[7px] text-[14px] font-bold text-primary [&_svg>path]:bg-primary ${styles.ShowFavorites}`}
          >
            {<FaHeart />}{" "}
            <span>
              {company?.favoriteCandidateCount ?? 0}{" "}
              {componentsTranslation(
                company?.favoriteCandidateCount !== 1
                  ? "Favorite.favorite"
                  : "Favorite.favorites"
              )}
            </span>
          </div>
        </Tooltip>
      )}
    </div>
  );
}
