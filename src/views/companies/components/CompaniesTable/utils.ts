import { useCompaniesDictionary } from "locales/t/companies";

export function useGetCompaniesTableHead() {
  const { translate } = useCompaniesDictionary();

  const items = [
    {
      id: "company-name",
      name: translate("companies.companies-list.table.thead.company-name"),
    },
    {
      id: "company-id",
      name: translate("companies.companies-list.table.thead.company-id"),
    },
    {
      id: "industry",
      name: translate("companies.companies-list.table.thead.industry"),
    },
    {
      id: "responsible",
      name: translate("companies.companies-list.table.thead.responsible"),
    },
    {
      id: "total-to-pay",
      name: translate("companies.companies-list.table.thead.total-to-pay"),
    },
    {
      id: "last-sheet-state",
      name: translate("companies.companies-list.table.thead.last-sheet-state"),
    },
    {
      id: "action",
      name: translate("companies.companies-list.table.thead.action"),
    },
  ];

  return { items };
}
