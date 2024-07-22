import { useEffect, useState } from "react";
import { AppKeys } from "../appKeys";

export function getCompanyId() {
  const companyId =
    window && "sessionStorage" in window
      ? sessionStorage?.getItem(AppKeys.companyId)
      : "";

  return companyId as string;
}

export function useGetCompanyId() {
  const [companyId, setCompanyId] = useState<string>("");

  useEffect(() => {
    const companyId = sessionStorage.getItem(AppKeys.companyId);
    if (companyId) {
      setCompanyId(companyId);
    }
  }, []);

  return companyId;
}
