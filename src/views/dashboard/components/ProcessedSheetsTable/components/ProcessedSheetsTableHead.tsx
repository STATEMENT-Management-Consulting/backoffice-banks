import { Th } from "@/components/Table/Th";
import { useProcessedSheetsTableHeadItems } from "./utils";
import { Fragment } from "react";

export function ProcessedSheetsTableHead() {
  const { items } = useProcessedSheetsTableHeadItems();
  return items?.map((item) => (
    <Fragment key={item?.id}>
      <Th className="text-nowrap text-center">{item?.label}</Th>
    </Fragment>
  ));
}
