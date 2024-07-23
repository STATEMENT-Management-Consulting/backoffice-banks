import React, { Dispatch, SetStateAction, useState } from "react";

type DashboardContextProps = {
  selectedDashboardSheet?:
    | "processed-sheets"
    | "pending-sheets"
    | "last-processions";
  setSelectedDashboardSheet?: Dispatch<
    SetStateAction<"processed-sheets" | "pending-sheets" | "last-processions">
  >;
};

export const DashboardContext = React.createContext<DashboardContextProps>({});

export function DashboardContextProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [selectedDashboardSheet, setSelectedDashboardSheet] = useState<
    "processed-sheets" | "pending-sheets" | "last-processions"
  >("processed-sheets");

  return (
    <DashboardContext.Provider
      value={{ selectedDashboardSheet, setSelectedDashboardSheet }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
