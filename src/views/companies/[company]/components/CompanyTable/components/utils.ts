import { useCompaniesDictionary } from "locales/t/companies";

export function useGetCompanySheetTableItems() {
  const { translate } = useCompaniesDictionary();

  const items = [
    {
      id: "sheet-id",
      name: translate("company.table.thead.sheet-id"),
    },
    {
      id: "entry-date",
      name: translate("company.table.thead.entry-date"),
    },
    {
      id: "date-to-process",
      name: translate("company.table.thead.date-to-process"),
    },
    {
      id: "sheet-state",
      name: translate("company.table.thead.sheet-state"),
    },
    {
      id: "action",
      name: translate("company.table.thead.action"),
    },
  ];
  return { items };
}
