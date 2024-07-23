import { useLayoutDictionary } from "locales/t/layout";
import { useRouter } from "next/router";
import { alwaysAccessibleRoutes } from "../mainRoutes";
import { RootLayoutRoute } from "./RootLayoutRoute";
import { useRef } from "react";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { useLocale } from "@/utilities/hooks/useLocale";
import { useRestrictByLocation } from "@/control/useRestrictByLocation";

interface ISubMenuList {
  close: () => void;
}

export function SubMenuList({ close }: ISubMenuList) {
  const t = useLayoutDictionary();
  const { asPath: pathname, push } = useRouter();
  const { locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { isAllowedCountry } = useRestrictByLocation();
  const routes = [...alwaysAccessibleRoutes];

  useOutsideClick(ref, close);

  const navigateToRoute = (route: string) => {
    close();
    push(route);
  };

  const getRouteName = (base: string) => t(`routes.${base}.name` as any);

  const isCurrentRoute = (href: string) =>
    href === "/" || href === `/${locale}`
      ? pathname === href || pathname === `/${locale}/${href}`
      : "/" !== pathname &&
        `/${locale}` !== pathname &&
        (pathname.startsWith(href) ||
          pathname.startsWith(`/${locale}/${href}`));

  return (
    <nav
      ref={ref}
      className="absolute p-[1rem] shadow-md top-[125%] z-10 bg-white right-0  min-w-[16.5rem] rounded-[1rem]"
    >
      {routes
        .filter((route) => route.breakpoint === "submenu")
        .map((route) => (
          <RootLayoutRoute
            key={route.href}
            {...route}
            name={getRouteName(route.href)}
            href={route.redirect ?? route.href}
            isCurrent={isCurrentRoute(route.href)}
            onClick={navigateToRoute}
            isFromSubMenu
          />
        ))}
    </nav>
  );
}
