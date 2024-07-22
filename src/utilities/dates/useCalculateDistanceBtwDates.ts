import formatDistance from "date-fns/formatDistance";
import { datesLocales } from "./datesLocales";
import { useLocale } from "../hooks/useLocale";

type TFormatterParams = {
  date: Date;
  secondDate: Date;
  options?: {
    includeSeconds?: boolean;
    addSuffix?: boolean;
  };
};

export function useCalculateDistanceBtwDates() {
  const { locale } = useLocale();

  const calculateDistance = ({
    date,
    secondDate,
    options,
  }: TFormatterParams) => {
    try {
      return formatDistance(new Date(date), new Date(secondDate), {
        locale: datesLocales[locale as keyof typeof datesLocales],
        ...options,
      });
    } catch {}

    return "";
  };

  return { calculateDistance };
}
