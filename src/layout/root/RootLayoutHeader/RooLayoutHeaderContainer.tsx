import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function RooLayoutHeaderContainer({ children }: Props) {
  return (
    <div className="w-full bg-white h-[96px] flex justify-center  items-center">
      <div className="px-[32px] py-[8px] w-full max-w-[1440px] flex justify-between items-center">
        {children}
      </div>
    </div>
  );
}
