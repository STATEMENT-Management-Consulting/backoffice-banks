import { HomeSvg } from "./assets/HomeSvg";
import { BriefcaseSvg } from "./assets/BriefcaseSvg";
import { UserProfileSvg } from "./assets/UserProfileSvg";
import { UsersCollaboratorsSvg } from "./assets/UsersCollaboratorsSVg";
import { Payroll } from "@/assets/payroll-icon";

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
    href: "/profile",
    icon: UserProfileSvg,
    breakpoint: "main",
  },
  {
    href: "/recruitment",
    redirect: "/recruitment/jobs",
    icon: BriefcaseSvg,
    hasSubRoutes: true,
    breakpoint: "main",
  },
];

export const conditionallyAccessibleRoutes: TMainRoutes[] = [
  {
    href: "/collaborators",
    icon: UsersCollaboratorsSvg,
    hasSubRoutes: true,
    breakpoint: "main",
  },
  {
    href: "/payroll",
    icon: Payroll,
    hasSubRoutes: true,
    breakpoint: "main",
  },
  // {
  //   href: "/training",
  //   icon: FrameSvg,
  //   hasSubRoutes: true,
  //   breakpoint: "submenu",
  // },
  // {
  //   href: "/wages",
  //   icon: MoneyStackSvg,
  //   hasSubRoutes: true,
  //   breakpoint: "submenu",
  // },
];
