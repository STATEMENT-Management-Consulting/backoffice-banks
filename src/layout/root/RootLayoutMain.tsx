import { ReactNode } from "react";

interface IRootLayoutMain {
  children: ReactNode;
}

export function RootLayoutMain({ children }: IRootLayoutMain) {
  return (
    <main
      id="Mirantes-b2c-RootLayoutMain"
      className="relative stack items-center gap-y-2 flex-grow overflow-y-scroll"
    >
      {children}
    </main>
  );
}
