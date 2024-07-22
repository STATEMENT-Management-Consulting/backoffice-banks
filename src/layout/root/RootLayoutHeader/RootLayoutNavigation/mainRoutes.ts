import { HomeSvg } from "./assets/HomeSvg";
import { BriefcaseSvg } from "./assets/BriefcaseSvg";
import { UserProfileSvg } from "./assets/UserProfileSvg";
import { UsersCollaboratorsSvg } from "./assets/UsersCollaboratorsSVg";
import { Payroll } from "@/assets/payroll-icon";
import { BuildIcon } from "@/assets/feather-icons/BuildIcon";

type TMainRoutes = {
  href: string;
  redirect?: string;
  icon: JSX.Element;
  hasSubRoutes?: boolean;
  disabled?: boolean;
  breakpoint: string;
};

export const alwaysAccessibleRoutes: TMainRoutes[] = [
  {
    href: "/",
    icon: HomeSvg,
    breakpoint: "main",
  },
  {
    href: "/companies",
    icon: BuildIcon,
    breakpoint: "main",
  },
  {
    href: "/managers",
    redirect: "/recruitment/jobs",
    icon: BriefcaseSvg,
    hasSubRoutes: true,
    breakpoint: "main",
  },
];
