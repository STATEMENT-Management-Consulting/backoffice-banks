import { useComponentsDictionary } from "locales/t/components";
export function useGetMonth(month: number) {
  const translation = useComponentsDictionary();

  const months = [
    translation("Date.months.January"),
    translation("Date.months.February"),
    translation("Date.months.March"),
    translation("Date.months.April"),
    translation("Date.months.May"),
    translation("Date.months.June"),
    translation("Date.months.July"),
    translation("Date.months.August"),
    translation("Date.months.September"),
    translation("Date.months.October"),
    translation("Date.months.November"),
    translation("Date.months.December"),
  ];

  return months[month - 1];
}
