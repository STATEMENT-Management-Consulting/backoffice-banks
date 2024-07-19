import { cn } from "@/styles/utils";
import type { ReactNode } from "react";

interface ICardInfo {
  className?: string;
  cardClassName?: string;
  headerClassName?: string;
  children?: ReactNode;
  header?: ReactNode;
  label?: string | any;
  separator?: boolean;
}

export function CardInfo({
  className,
  children,
  header,
  label,
  cardClassName,
  headerClassName,
  separator = true,
}: ICardInfo) {
  return (
    <div
      className={`stack gap-y-4 card-outline relative group/company-info ${cardClassName}`}
    >
      <div className={cn("flex flex-col gap-y-4", headerClassName)}>
        {header}
        {label && (
          <p className="text-text-dark font-semibold text-body-xl">{label}</p>
        )}
      </div>
      {/* {separator && <div className="rule-horizontal" />} */}
      <div className={className}>{children}</div>
    </div>
  );
}
