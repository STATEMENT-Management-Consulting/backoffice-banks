import styles from "../RootLayoutNavigation/RootLayoutNavigation.module.css";
import { IconType } from "react-icons";
import { usePathname } from "@/utilities/hooks/usePathname";
import { cn } from "@/styles/utils";

interface ISubMenuLink {
  Icon: IconType;
  route?: string;
  name: string;
  onClick: () => void;
  RightIcon?: IconType;
}

export const MenuOption = ({
  Icon,
  route,
  name,
  onClick,
  RightIcon,
}: ISubMenuLink) => {
  const pathname = usePathname();
  const istActive = (route: string) => {
    return pathname === route || pathname.includes(route);
  };
  const active = route ? istActive(route) : false;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={
        "w-full group grid grid-cols-[auto_1fr] items-center content-center p-[1rem] transition-all duration-150 hover:bg-transparent-primary rounded-[0.625rem] gap-x-[0.63rem] " +
        `${
          route
            ? active &&
              " text-primary bg-transparent-primary rounded-[0.625rem]"
            : ""
        }` +
        ` ${styles.RootLayoutRouteSubMenu}`
      }
    >
      <Icon
        className={cn(
          active ? "!text-primary" : "",
          "group-hover:text-primary text-gray-400"
        )}
      />
      <div className="flex items-center justify-between">
        <span
          className={`transition-all duration-150 font-bold text-[0.875rem] text-grey ${
            route ? active && "text-primary !important" : ""
          }`}
        >
          {name}
        </span>
        {RightIcon && <RightIcon />}
      </div>
    </div>
  );
};
