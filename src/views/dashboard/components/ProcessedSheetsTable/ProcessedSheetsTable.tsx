import { Table } from "@/components/Table/Table";
import { useDashboardDictionary } from "locales/t/dashboard";
import { ProcessedSheetsTableBody } from "./components/ProcessedSheetsTableBody";
import dynamic from "next/dynamic";
import { PaginationFooter } from "@/components/PaginationFooter/PaginationFooter";

export function ProcessedSheetsTable() {
  const { translate } = useDashboardDictionary();
  const ProcessedSheetsTableHead = dynamic(
    import("./components/ProcessedSheetsTableHead").then(
      (mod) => mod.ProcessedSheetsTableHead
    ),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full stack gap-y-8">
      <div className="w-full items-center justify-between">
        <h4>{translate("dashboard.processed-sheets.title")}</h4>
      </div>

      <Table tHead={<ProcessedSheetsTableHead />}>
        <ProcessedSheetsTableBody />
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
    </div>
  );
}
