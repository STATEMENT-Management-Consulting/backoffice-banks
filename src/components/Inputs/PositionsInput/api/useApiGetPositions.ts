import { miraApi } from "@/api/mirantes/miraApi";
import { useLocale } from "@/utilities/hooks/useLocale";
import { useQuery } from "@tanstack/react-query";
import { sortBy } from "lodash";

type TPositions = {
  name: string;
  id: string;
};

const getPositions = async (locale: string) => {
  const response = await miraApi.get<{
    professions: TPositions[];
  }>(`/mirantes/professions?lang=${locale}`);

  return response.data.professions;
};

export function useApiGetPositions() {
  const { locale } = useLocale();

  const { data: positions, isLoading: isGettingPositions } = useQuery({
    queryKey: ["mirantes/positions"],
    queryFn: () => getPositions(locale),
    cacheTime: 0,
  });

  return { positions: sortBy(positions, "name", "asc"), isGettingPositions };
}
