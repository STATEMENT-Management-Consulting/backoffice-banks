import { Table } from "@/components/Table/Table";
import { CompanySheetsTableBody } from "./components/CompanySheetsTableBody";
import dynamic from "next/dynamic";
import { PaginationFooter } from "@/components/PaginationFooter/PaginationFooter";

const CompanySheetsTableHead = dynamic(
  () =>
    import("./components/CompanySheetsTableHead").then(
      (mod) => mod.CompanySheetsTableHead
    ),
  {
    ssr: false,
  }
);

export function CompanySheetsTable() {
  return (
    <div className="bg-white flex-1 stack gap-y-8    card">
      <div>
        <Table className="w-full" tHead={<CompanySheetsTableHead />}>
          <CompanySheetsTableBody />
        </Table>
      </div>

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
    </div>
  );
}
