import { ReactNode } from "react";
import { RootLayoutMain } from "./RootLayoutMain";
import { RootLayoutContainer } from "./RootLayoutContainer";
import { RooLayoutHeader } from "./RootLayoutHeader/RooLayoutHeader";

export function RootLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <RootLayoutContainer>
      <RooLayoutHeader />
      <RootLayoutMain>{children}</RootLayoutMain>
    </RootLayoutContainer>
  );
}
