import { miraApi } from "@/api/mirantes/miraApi";
import { useLocale } from "@/utilities/hooks/useLocale";
import { useQuery } from "@tanstack/react-query";
import { sortBy } from "lodash";

type TIndustry = {
  name: string;
  id: string;
};

const getIndustries = async (locale?: string) => {
  const response = await miraApi.get<{
    industries: TIndustry[];
  }>(
    `/mirantes/industries${locale !== "pt" && locale ? `?lang=${locale}` : ""}`
  );

  return response.data.industries;
};

export function useAPiGetIndustries() {
  const { locale } = useLocale();
  const { data: industries, isLoading: isGettingIndustries } = useQuery({
    queryKey: ["mirantes/industries"],
    queryFn: () => getIndustries(locale),
    cacheTime: 0,
  });

  return { industries: sortBy(industries, "name", "asc"), isGettingIndustries };
}
