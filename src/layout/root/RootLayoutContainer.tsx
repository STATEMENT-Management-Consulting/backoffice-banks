import { PropsWithChildren } from "react";

export function RootLayoutContainer({ children }: PropsWithChildren) {
  return (
    <div className="bg-bg !h-screen overflow-hidden stack">{children}</div>
  );
}
