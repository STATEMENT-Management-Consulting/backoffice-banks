import { ReactNode } from "react";
import { Spinner } from "../Spinner/Spinner";
import { cn } from "@/styles/utils";

interface IButton {
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  title?: string;
  icon?: JSX.Element;
}

export function Button({
  label,
  type = "button",
  className,
  onClick,
  isLoading,
  disabled,
  children,
  title,
  icon,
}: IButton) {
  return (
    <button
      type={type}
      className={cn(className, `text-[0.875rem] [&_div]:!translate-x-1`)}
      onClick={onClick}
      disabled={disabled || isLoading}
      title={title}
    >
      {isLoading && <Spinner className="!w-5 !h-5" />}
      {icon}
      {children ?? label}
    </button>
  );
}
