import { TabsList } from "@radix-ui/react-tabs";
import type { ReactNode } from "react";

interface ITabList {
  children: ReactNode;
}

export function TabList({ children }: ITabList) {
  return (
    <TabsList className={`flex border-b border-b-border gap-x-2`}>
      {children}
    </TabsList>
  );
}
