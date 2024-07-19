import { TabsTrigger } from "@radix-ui/react-tabs";
import type { ReactNode } from "react";

interface ITabTrigger {
  children: ReactNode;
  value: string;
  className?: string;
}

export function TabTrigger({ children, className, value }: ITabTrigger) {
  return (
    <TabsTrigger
      value={value}
      className={`[&[data-state='active']]:text-primary border-b-2 border-transparent [&[data-state='active']]:border-b-primary first:min-w-max text-body-md px-[0.36rem] py-[0.58rem] rounded-none ${className}`}
    >
      {children}
    </TabsTrigger>
  );
}
