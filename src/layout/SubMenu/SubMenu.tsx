import { ISubMenuRoute, SubMenuRoute } from "./SubMenuRoute";
import { cn } from "@/styles/utils";
import { usePathname } from "@/utilities/hooks/usePathname";

interface ISubMenu {
  className?: string;
  routes: ISubMenuRoute[];
  baseRoute?: string;
}

export function SubMenu({ className, routes, baseRoute = "" }: ISubMenu) {
  const pathname = usePathname();

  const isActive = (route: string) =>
    baseRoute === route ? pathname === route : pathname?.startsWith(route);

  return (
    <nav className={cn(className, "w-[300px] gap-y-4 card stack h-min")}>
      {routes?.map((route) => (
        <SubMenuRoute
          key={route.path}
          {...route}
          name={route?.name}
          className={route?.target}
          isActive={isActive(route?.key ?? route.path)}
        />
      ))}
    </nav>
  );
}
