import { useGetUsersLocation } from "@/utilities/hooks/useGetUsersLocation";

async function fetchLocationData(ip: string) {
  const response = await fetch(`/api/geo?ip=${ip}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

export function useRestrictByLocation() {
  const { data, isLoading } = useGetUsersLocation();

  return {
    isAllowedCountry: data?.country === "AO",

    isGettingLocation: isLoading,
  };
}
