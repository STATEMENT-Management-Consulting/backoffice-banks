import { PaginationFooter } from "@/components/PaginationFooter/PaginationFooter";
import { Table } from "@/components/Table/Table";
import dynamic from "next/dynamic";

const ProcessSalaryTableHead = dynamic(
  () =>
    import("./ProcessSalaryTableHead").then(
      (mod) => mod.ProcessSalaryTableHead
    ),
  {
    ssr: false,
  }
);

const ProcessSalaryTableBody = dynamic(
  () =>
    import("./ProcessSalaryTableBody").then(
      (mod) => mod.ProcessSalaryTableBody
    ),
  {
    ssr: false,
  }
);

export function ProcessSalaryTable() {
  return (
    <>
      <Table tHead={<ProcessSalaryTableHead />}>
        <ProcessSalaryTableBody />
      </Table>

      <PaginationFooter
        hasNextPage={false}
        hasPreviousPage={true}
        isFetching={false}
        changeCurrentPage={() => {}}
        currentPage={1}
        numberOfPages={4}
        changeElementsToShow={() => {}}
        showingElements={2}
        totalOfElements={3}
      />
    </>
  );
}
