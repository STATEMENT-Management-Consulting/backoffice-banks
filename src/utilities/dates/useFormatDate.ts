import dateFormatter from "date-fns/format";
import { datesLocales } from "./datesLocales";
import { useLocale } from "../hooks/useLocale";

type TFormatterParams = {
  date?: Date;
  format?: string;
  erroText?: string;
};

export function useFormatDate() {
  const { locale } = useLocale();

  const formatDate = ({
    date,
    format = "dd/MM/yyyy",
    erroText = "-- / -- / ----",
  }: TFormatterParams) => {
    if (date)
      try {
        return dateFormatter(
          new Date(date),
          format.replace(/(D|Y)/g, (match) => match.toLowerCase()),
          {
            locale: datesLocales[locale as keyof typeof datesLocales],
          }
        );
      } catch {
        return JSON.stringify(date);
      }

    return erroText;
  };

  return { formatDate };
}
