import { Th } from "@/components/Table/Th";
import { useGetCompaniesTableHead } from "./utils";
import { Fragment } from "react";

export function CompaniesTableHead() {
  const { items } = useGetCompaniesTableHead();

  return items?.map((item) => (
    <Fragment key={item.id}>
      <Th>{item.name}</Th>
    </Fragment>
  ));
}
