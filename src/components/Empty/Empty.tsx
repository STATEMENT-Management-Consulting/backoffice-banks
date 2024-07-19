import { NotFoundSvg } from "@/assets/JobsNotFoundSvg";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

interface IEmpty {
  className?: string;
  children?: ReactNode;
  label: string;
}

function EmptyComponent({ children, className, label }: IEmpty) {
  return (
    <div className={`stack-center gap-y-6 ${className}`}>
      <NotFoundSvg />
      <h4>{label}</h4>
      {children}
    </div>
  );
}

export const Empty = dynamic(() => Promise.resolve(EmptyComponent), {
  ssr: false,
});
