import { useProcessSalaryDictionary } from "locales/t/process-salary";

export function useGetProcessSalaryTableHead() {
  const { translate } = useProcessSalaryDictionary();

  const items = [
    {
      id: "collaborator-name",
      name: translate("process-salary.table.thead.collaborator-name"),
    },
    {
      id: "id",
      name: translate("process-salary.table.thead.id"),
    },
    {
      id: "role",
      name: translate("process-salary.table.thead.role"),
    },
    {
      id: "payment-iban",
      name: translate("process-salary.table.thead.payment-iban"),
    },
    {
      id: "irt",
      name: translate("process-salary.table.thead.irt"),
    },
    {
      id: "social-security",
      name: translate("process-salary.table.thead.social-security"),
    },
    {
      id: "ss-patronal-entity",
      name: translate("process-salary.table.thead.ss-patronal-entity"),
    },
    {
      id: "liquid-salary",
      name: translate("process-salary.table.thead.liquid-salary"),
    },
  ];

  return { items };
}
