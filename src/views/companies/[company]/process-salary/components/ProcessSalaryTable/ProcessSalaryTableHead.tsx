import { Th } from "@/components/Table/Th";
import { Fragment } from "react";
import { useGetProcessSalaryTableHead } from "./utils";

export function ProcessSalaryTableHead() {
  const { items } = useGetProcessSalaryTableHead();
  return items.map((item) => (
    <Fragment key={item.id}>
      <Th
        className={
          item?.id != "collaborator-name" ? "text-center" : "text-left"
        }
      >
        {item.name}
      </Th>
    </Fragment>
  ));
}
