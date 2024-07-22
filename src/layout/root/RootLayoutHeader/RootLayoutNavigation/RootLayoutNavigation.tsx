import { alwaysAccessibleRoutes } from "./mainRoutes";
import { useRouter } from "next/router";
import { useLayoutDictionary } from "locales/t/layout";
import { RootLayoutRoute } from "./components/RootLayoutRoute";
import { useComponentsDictionary } from "locales/t/components";

export function RootLayoutNavigation() {
  const t = useLayoutDictionary();
  const componentsTranslation = useComponentsDictionary();
  
  const { asPath: pathname } = useRouter();
  const routes = [...alwaysAccessibleRoutes];

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
    </div>
  );
}
