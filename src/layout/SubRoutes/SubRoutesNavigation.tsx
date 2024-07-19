import { usePathname } from "@/utilities/hooks/usePathname";
import { useLayoutDictionary } from "locales/t/layout";
import { LayoutSubRoute } from "./LayoutSubRoute";

interface ILayoutSubRouteNavigation {
  baseRoute: string;
  subRoutes: Array<{ href: string; path: string }>;
}

export function LayoutSubRouteNavigation({
  baseRoute,
  subRoutes,
}: ILayoutSubRouteNavigation) {
  const layoutDictionary = useLayoutDictionary();
  const pathname = usePathname();

  const getSubRouteName = (subRoute: string) =>
    layoutDictionary(`routes.${baseRoute}.sub-routes.${subRoute}.name` as any);

  const isCurrent = (subRoute: string) => pathname === subRoute;

  return (
    <div className="bg-blue-shade9 w-full flex justify-center">
      <nav
        aria-label="Recruitment Routes"
        className="layout-max-width !py-0 flex justify-center"
      >
        {subRoutes?.map((route) => (
          <LayoutSubRoute
            key={route.href}
            href={`${baseRoute}${route.href}`}
            name={getSubRouteName(route.href)}
            isCurrent={isCurrent(route.path)}
          />
        ))}
      </nav>
    </div>
  );
}
