import { ReactNode } from "react";

interface ITh {
  label?: string;
  className?: string;
  title?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function Th({ label, className, title, onClick, children }: ITh) {
  return (
    <th
      className={`py-[1.16rem] text-gray-shade8 px-[1rem] font-bold text-body-sm bg-gray-shade12 first:rounded-l-[0.625rem] last:rounded-r-[0.625rem] ${className}`}
      title={title}
      onClick={onClick}
    >
      {children ?? label}
    </th>
  );
}
