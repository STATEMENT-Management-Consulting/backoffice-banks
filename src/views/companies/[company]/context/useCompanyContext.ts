import React from "react";
import { CompanyContext } from "./CompanyContext";

export function useCompanyContext() {
  return React.useContext(CompanyContext);
}
