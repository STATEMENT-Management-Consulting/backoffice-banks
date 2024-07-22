import { PageLoader } from "@/components/PageLoader/PageLoader";
import { cn } from "@/styles/utils";
import useScroll from "@/utilities/hooks/useScrolled";
import { ReactNode } from "react";

interface IRootLayoutHeaderContainer {
  children: ReactNode;
}

export function RootLayoutHeaderContainer({
  children,
}: IRootLayoutHeaderContainer) {
  const { hasScrolled } = useScroll({
    elementId: "Mirantes-b2c-RootLayoutMain",
  });

  return (
    <header
      className={cn(
        "!w-screen bg-white flex justify-center sticky top-0 inset-x-0 z-50 transition-shadow",
        hasScrolled ? "shadow-default" : ""
      )}
    >
      <PageLoader />
      <div className="w-full max-ws-[86rem] max-w-[90rem] px-20 flex items-center justify-between py-[0.5rem]">
        {children}
      </div>
    </header>
  );
}
