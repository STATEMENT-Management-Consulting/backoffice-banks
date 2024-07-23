import { useDashboardDictionary } from "locales/t/dashboard";

export function useProcessedSheetsTableHeadItems() {
  const { translate } = useDashboardDictionary();

  const items = [
    {
      id: "company-name",
      label: translate("dashboard.processed-sheets.table.thead.company-name"),
    },
    {
      id: "sheet-id",
      label: translate("dashboard.processed-sheets.table.thead.sheet-id"),
    },
    {
      id: "amount-to-pay",
      label: translate("dashboard.processed-sheets.table.thead.amount-to-pay"),
    },
    {
      id: "entry-date",
      label: translate("dashboard.processed-sheets.table.thead.entry-date"),
    },
    {
      id: "date-to-process",
      label: translate("dashboard.processed-sheets.table.thead.date-to-process"),
    },
    {
      id: "sheet-state",
      label: translate("dashboard.processed-sheets.table.thead.sheet-state"),
    },
    {
      id: "action",
      label: translate("dashboard.processed-sheets.table.thead.action"),
    },
  ];

  return { items };
}
