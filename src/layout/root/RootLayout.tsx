import { ReactNode } from "react";
import { RootLayoutContainer } from "./RootLayoutContainer";
import { RootLayoutHeader } from "./RootLayoutHeader/RootLayoutHeader";
import { RootLayoutMain } from "./RootLayoutMain";
import ExpandSection from "./components/ExpandSection";
import { AppOtherFeatures } from "./AppOtherFeatures/AppOtherFeatures";
import { Spinner } from "@/components/Spinner/Spinner";
import { useRedirectIfForbidden } from "@/control/useRedirectIfForbidden";

export function RootLayoutWrapper({ children }: { children: ReactNode }) {
  const { isGettingLocation } = useRedirectIfForbidden();

  if (isGettingLocation)
    return (
      <div className="flex-center bg-white fixed inset-0">
        <Spinner />
      </div>
    );

  return (
    <ExpandSection>
      <RootLayoutContainer>
        <RootLayoutHeader />
        <RootLayoutMain>
          <AppOtherFeatures>{children}</AppOtherFeatures>
        </RootLayoutMain>
      </RootLayoutContainer>
    </ExpandSection>
  );
}
