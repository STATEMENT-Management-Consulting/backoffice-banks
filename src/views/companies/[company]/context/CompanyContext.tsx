import React, { Dispatch, SetStateAction } from "react";

type CompanyContextProps = {
  activeTab: "all-sheets" | "new-sheets" | "processed-sheets";
  setActiveTab: Dispatch<
    SetStateAction<"all-sheets" | "new-sheets" | "processed-sheets">
  >;
};

export const CompanyContext = React.createContext<CompanyContextProps>({
  activeTab: "all-sheets",
  setActiveTab: () => {},
});

export function CompanyContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = React.useState<
    "all-sheets" | "new-sheets" | "processed-sheets"
  >("all-sheets");
  return (
    <CompanyContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </CompanyContext.Provider>
  );
}
