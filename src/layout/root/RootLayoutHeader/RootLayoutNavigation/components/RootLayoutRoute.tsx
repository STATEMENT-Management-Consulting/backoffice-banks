import Link from "next/link";
import { ReactNode } from "react";
import styles from "../RootLayoutNavigation.module.css";
import { ChevronDown20Icon } from "@/assets/feather-icons/ChevronDown20Icon";
import { cn } from "@/styles/utils";
import { useLocale } from "@/utilities/hooks/useLocale";
import { joinUrlWithPathAndQuery } from "@/utilities/helpers/joinUrlWithPathAndQuery";
import { useApiGetCompany } from "@/utilities/api/companies/useApiGetCompany";

interface IRootLayoutRoute {
  href: string;
  name: string;
  icon: ReactNode;
  isCurrent: boolean;
  hasSubRoutes?: boolean;
  disabled?: boolean;
  onClick?: (route: string) => void;
  isFromSubMenu?: boolean;
}
const b2bPayroll = process.env.NEXT_PUBLIC_B2B_PAYROLL_URL as string;

export function RootLayoutRoute({
  href,
  isCurrent,
  disabled,
  hasSubRoutes,
  onClick,
  isFromSubMenu,
  ...props
}: IRootLayoutRoute) {
  const { locale } = useLocale();
  const { company } = useApiGetCompany();

  const handleGoToPayroll = () => {
    if (company?.id) {
      const payrollUrl = joinUrlWithPathAndQuery(
        b2bPayroll,
        `${locale}/verify`,
        {
          ic: company?.id,
        }
      );
      window.location.href = payrollUrl;
    }
  };

  if (disabled) {
    return (
      <RootLayoutRouteContainer
        disabled={disabled}
        isCurrent={isCurrent}
        {...props}
      />
    );
  } else if (props.name === "Payroll") {
    return (
      <div
        onClick={handleGoToPayroll}
        route-current={`${isCurrent}`}
        route-disable={`${disabled}`}
        className={cn(
          isFromSubMenu ? styles.RootLayoutRouteSubMenu : "cursor-pointer",
          `${styles.RootLayoutRoute} !bg-opacity-10 [&>svg_*]:fill-gray-shade7`
        )}
      >
        {props?.icon}
        <span
          className={`transition-all duration-150 font-bold text-[0.875rem] text-grey ${
            isCurrent && "text-primary !important"
          }`}
        >
          {props?.name}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={`select-none ${
        isCurrent && !hasSubRoutes ? "pointer-events-none" : ""
      }`}
      onClick={() => onClick?.(href)}
    >
      <RootLayoutRouteContainer
        disabled={disabled}
        isCurrent={isCurrent}
        hasSubRoutes={hasSubRoutes}
        isFromSubMenu={isFromSubMenu}
        {...props}
      />
    </Link>
  );
}

function RootLayoutRouteContainer({
  icon,
  isCurrent,
  name,
  isFromSubMenu,
  disabled,
}: Omit<IRootLayoutRoute, "href">) {
  return (
    <div
      route-current={`${isCurrent}`}
      route-disable={`${disabled}`}
      className={cn(
        isFromSubMenu ? styles.RootLayoutRouteSubMenu : "",
        `${styles.RootLayoutRoute} !bg-opacity-10 [&>svg_*]:fill-gray-shade7`
      )}
    >
      {icon}
      <span
        className={`transition-all duration-150 font-bold text-[0.875rem] text-grey ${
          isCurrent && "text-primary !important"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
