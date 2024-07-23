import { Th } from "@/components/Table/Th";
import { useGetCompanySheetTableItems } from "./utils";

export function CompanySheetsTableHead() {
  const { items } = useGetCompanySheetTableItems();

  return items?.map((item) => <Th key={item?.id}>{item?.name}</Th>);
}
