import { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DotsVerticalIcon } from "@/assets/feather-icons/DotsVerticalIcon";
import { cn } from "@/styles/utils";
import { BiDotsHorizontal } from "react-icons/bi";

interface IDropdown {
  trigger?: ReactNode;
  children: ReactNode;
  "aria-label"?: string;
  contentAlign?: "center" | "start" | "end" | undefined;
  className?: string;
  horizontalDots?: boolean;
  triggerClassName?: string;
  onOpenChange?: () => void;
}

export function Dropdown({
  trigger,
  "aria-label": ariaLabel = "Dropdown options",
  contentAlign = "end",
  children,
  className,
  horizontalDots,
  triggerClassName,
  onOpenChange,
}: IDropdown) {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(triggerClassName, "outline-none !p-0 pl-2")}
          type="button"
          aria-label={ariaLabel}
        >
          {trigger ??
            (horizontalDots ? <BiDotsHorizontal /> : DotsVerticalIcon)}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            "shadow-md rounded-[0.75rem] bg-white mt-4 p-4 z-[51]",
            className
          )}
          align={contentAlign}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export function DropdownItem({
  children,
  className,
  icon,
  label,
  onClick: onCLick,
}: {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
}) {
  return (
    <DropdownMenu.Item
      className={cn(
        className,
        `button min-w-[200px] rounded-[0.625rem] [&_svg_*]:fill-grey text-grey [&_svg_*]:hover:fill-primary hover:!text-primary hover:bg-primary hover:bg-opacity-10 flex items-center justify-start text-left gap-x-[0.62rem] transition-all`,
        className
      )}
      onClick={(e) => {
        onCLick?.();
        e?.currentTarget?.click?.();
        return e;
      }}
    >
      {icon}
      {label}
      {children}
    </DropdownMenu.Item>
  );
}
