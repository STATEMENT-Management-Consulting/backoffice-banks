import Link from "next/link";
import { ReactNode } from "react";

export type ISubMenuRoute = {
  path: string;
  key?: string;
  name: string;
  target?: string;
  Icon?: ReactNode;
  disabled?: boolean;
  isActive?: boolean;
  forbidden?: boolean;
  className?: string;
};

export function SubMenuRoute({
  Icon,
  name,
  path,
  isActive,
  target,
}: ISubMenuRoute) {
  return (
    <Link href={path}>
      <div
        role="button"
        className={`relative px-4 py-[1.06rem] w-full text-left rounded-[0.625rem] text-text-dark [&_svg_*]:fill-text-dark font-bold gap-x-4 text-body-md ${
          isActive
            ? "!text-primary bg-primary bg-opacity-10 [&_svg_*]:!fill-primary "
            : "[&:hover_span]:pl-4 [&:hover_span]:transition-all transition-all hover:!text-primary hover:bg-primary hover:bg-opacity-10"
        } flex items-center justify-start text-left`}
      >
        {Icon}
        <span className={target}>{name}</span>
      </div>
    </Link>
  );
}
