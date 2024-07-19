import { ErrorIcon } from "@/assets/feather-icons/ErrorIcon";
import { InfoIcon } from "@/assets/feather-icons/InfoIcon";
import { RemoveIcon } from "@/assets/feather-icons/RemoveIcon";
import { SuccessIcon } from "@/assets/feather-icons/SuccessIcon";
import { ForwardedRef, ReactNode } from "react";

interface IAlert {
  message?: string;
  variant: "success" | "error" | "info" | "warning";
  className?: string;
  onRemove?: () => void;
  children?: ReactNode;
  ref?: ForwardedRef<HTMLInputElement> | null;
}

const alertIcons = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: InfoIcon,
};

const alertColors = {
  success:
    "bg-green-shade9 [&_*]:text-green-shade6 [&>div:first-of-type>svg_path]:fill-green-shade6",
  error:
    "bg-red-shade5 [&_*]:text-red-shade6 [&>div:first-of-type>svg_path]:fill-red-shade6",
  info: "bg-blue-shade12 [&_*]:text-blue-shade11 [&>div:first-of-type>svg_path]:fill-blue-shade11",
  warning:
    "bg-orange-shade8 bg-opacity-10 [&_*]:text-orange-shade8 [&>div:first-of-type>svg_path]:fill-orange-shade8",
};

export function Alert({
  variant,
  message,
  className,
  onRemove,
  children,
  ref,
}: IAlert) {
  return (
    <div
      ref={ref}
      className={`rounded-[0.625rem] p-4 flex items-start gap-x-4 ${className} ${alertColors[variant]}`}
    >
      <div className="min-w-6 min-h-6">{alertIcons[variant]}</div>
      <div className="flex-grow">{children ?? <p>{message}</p>}</div>
      {onRemove && (
        <button
          type="button"
          className="[&>svg>*]:fill-dark-black"
          onClick={onRemove}
        >
          {RemoveIcon}
        </button>
      )}
    </div>
  );
}
