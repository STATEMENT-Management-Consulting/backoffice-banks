import { format } from "date-fns";
import { datesLocales } from "./datesLocales";

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatDateString = (date: Date) => {
  return (
    format(date, "dd") +
    " " +
    format(date, "MMMM", { locale: datesLocales.pt }).replace(/\w+/g, (word) =>
      capitalize(word.slice(0, 3))
    ) +
    " " +
    format(date, "yyyy")
  );
};

export const formatDate = (date: Date) => {
  try {
    return date ? new Intl.DateTimeFormat("pt-BR").format(new Date(date)) : "";
  } catch {
    return "";
  }
};

export const formatIntervalString = (startDate: Date, endDate: Date) => {
  if (formatDateString(startDate) === formatDateString(endDate)) {
    return `${formatDateString(startDate)}`;
  }
  return `${formatDateString(startDate)} - ${formatDateString(endDate)}`;
};
