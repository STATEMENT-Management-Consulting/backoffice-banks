import { DropdownMenuItem, SubTrigger } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";

import styles from "./Dropdown.module.css";
import { cn } from "@/styles/utils";

interface IDropdownItem {
  onClick: () => void;
  isActive?: boolean;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  className?: string;
}

export function DropdownMenuSubTrigger({
  label,
  icon,
  className,
}: Omit<IDropdownItem, "onClick" | "isActive">) {
  return (
    <SubTrigger
      className={cn(
        className,
        styles.SubTrigger,
        `button pr-4 py-[1.06rem] min-w-[200px] text-left rounded-[0.625rem] text-text font-bold hover:!text-primary pl-4 hover:bg-primary hover:bg-opacity-10 flex items-center justify-between hover:!pr-0 [&\ gap-x-[0.62rem] [&:hover_span]:transition-all transition-all`
      )}
    >
      <span>{label}</span>
      {icon}
    </SubTrigger>
  );
}

export function DropdownItem({
  onClick,
  isActive,
  label,
  icon,
  className,
  color,
  disabled,
}: IDropdownItem & { color?: "green" | "orange" | "red" }) {
  const behavior = {
    orange: "hover:!bg-orange-shade6 hover:!text-orange-shade1",
    green: "hover:!bg-green-shade7 hover:!text-green-shade6",
    red: "hover:!bg-red-shade7 hover:!text-red-shade6",
  };

  return (
    <DropdownMenuItem
      className={cn(
        `button pr-4 py-[1.06rem] min-w-[200px] text-left rounded-[0.625rem] text-text font-bold hover:!text-primary pl-4 hover:bg-primary hover:!bg-opacity-10 ${
          isActive ? "!text-primary pl-4 bg-primary !bg-opacity-10" : ""
        } flex items-center justify-start text-left gap-x-[0.62rem] ${className}  [&:hover_span]:transition-all transition-all`,
        color ? behavior[color] : undefined,
        icon ? "[&:hover_span]:pl-2" : undefined,
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
      )}
      aria-label="Job Card Menu Option"
      onClick={(e) => {
        onClick?.();

        return e;
      }}
    >
      {icon}
      <span>{label}</span>
    </DropdownMenuItem>
  );
}
