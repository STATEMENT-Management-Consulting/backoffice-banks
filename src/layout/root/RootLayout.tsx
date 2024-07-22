import { ReactNode } from "react";
import { RootLayoutMain } from "./RootLayoutMain";
import { RootLayoutContainer } from "./RootLayoutContainer";
import { RootLayoutHeader } from "./RootLayoutHeader/RootLayoutHeader";

export function RootLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <RootLayoutContainer>
      <RootLayoutHeader />
      <RootLayoutMain>{children}</RootLayoutMain>
    </RootLayoutContainer>
  );
}
