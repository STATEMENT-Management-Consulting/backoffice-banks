import { cn } from "@/styles/utils";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ITr
  extends Partial<
    DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
  > {
  className?: string;
  children: ReactNode;
}

export function Tr({ children, onClick, className = "", ...rest }: ITr) {
  return (
    <tr
      className={cn(
        `[&>td]:py-[1.16rem] [&>td]:px-[1rem] hover:bg-gray-shade10 hover:bg-opacity-25 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-border`,
        onClick ? "cursor-pointer" : undefined,
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </tr>
  );
}
