import { RootLayoutLogo } from "./RootLayoutLogo";
import { RootLayoutNavigation } from "./RootLayoutNavigation/RootLayoutNavigation";
import { RootLayoutProfile } from "./RootLayoutProfile";
import { RootLayoutHeaderContainer } from "./RootLayoutHeaderContainer";

export function RootLayoutHeader() {
  return (
    <RootLayoutHeaderContainer>
      <RootLayoutLogo />
      <RootLayoutNavigation />
      <RootLayoutProfile />
    </RootLayoutHeaderContainer>
  );
}
