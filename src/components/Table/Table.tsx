import { ReactNode } from "react";

interface ITable {
  tHead?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Table({ tHead, children, className }: ITable) {
  return (
    <table
      className={`flex-grow text-left [&>thead]:sticky [&>thead]:top-0 [&>thead]:z-10 ${className}`}
    >
      {tHead}
      <tbody className="border-collapse">{children}</tbody>
    </table>
  );
}
