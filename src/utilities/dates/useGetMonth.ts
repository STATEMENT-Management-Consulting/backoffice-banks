import { useCollaboratorsSheetDictionary } from "locales/t/collaborators/sheet";
export function useGetMonth(month: number) {
  const translation = useCollaboratorsSheetDictionary();

  const months = [
    translation("sheet.tabs.employee-historic.months.January"),
    translation("sheet.tabs.employee-historic.months.February"),
    translation("sheet.tabs.employee-historic.months.March"),
    translation("sheet.tabs.employee-historic.months.April"),
    translation("sheet.tabs.employee-historic.months.May"),
    translation("sheet.tabs.employee-historic.months.June"),
    translation("sheet.tabs.employee-historic.months.July"),
    translation("sheet.tabs.employee-historic.months.August"),
    translation("sheet.tabs.employee-historic.months.September"),
    translation("sheet.tabs.employee-historic.months.October"),
    translation("sheet.tabs.employee-historic.months.November"),
    translation("sheet.tabs.employee-historic.months.December"),
  ];

  return months[month - 1];
}
