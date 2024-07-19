import { useQuery } from "@tanstack/react-query";
import { loadSubsidies } from "../services/loadSubsidies";

export function useApiLoadSubsidies() {
  const { data: subsidies, isLoading: isGettingSubsidies } = useQuery({
    queryKey: ["subsidies"],
    queryFn: loadSubsidies,
  });

  return {
    subsidies,
    isGettingSubsidies,
  };
}
