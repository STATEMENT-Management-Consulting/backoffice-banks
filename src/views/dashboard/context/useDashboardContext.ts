import React from "react";
import { DashboardContext } from "./DashboardContext";

export function useDashboardContext() {
  return React.useContext(DashboardContext);
}
