import { useCompaniesDictionary } from "locales/t/companies";

export function useGetCompanyTabs() {
  const { translate } = useCompaniesDictionary();

  const items = [
    {
      id: "all-sheets",
      name: translate("company.tabs.all-sheets.title"),
    },

    {
      id: "new-sheets",
      name: translate("company.tabs.new-sheets.title", { count: "20" }),
    },
    {
      id: "processed-sheets",
      name: translate("company.tabs.processed-sheets.title", { count: "10" }),
    },
  ];

  return { items };
}
