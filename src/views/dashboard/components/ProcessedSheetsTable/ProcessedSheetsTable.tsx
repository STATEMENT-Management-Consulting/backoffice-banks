import { Table } from "@/components/Table/Table";
import { useDashboardDictionary } from "locales/t/dashboard";
import { ProcessedSheetsTableBody } from "./components/ProcessedSheetsTableBody";
import dynamic from "next/dynamic";
import { PaginationFooter } from "@/components/PaginationFooter/PaginationFooter";
import { SelectInput } from "@/components/Inputs/SelectInput/SelectInput";
import { useDashboardContext } from "../../context/useDashboardContext";

export function ProcessedSheetsTable() {
  const { translate } = useDashboardDictionary();
  const { selectedDashboardSheet } = useDashboardContext();
  const ProcessedSheetsTableHead = dynamic(
    import("./components/ProcessedSheetsTableHead").then(
      (mod) => mod.ProcessedSheetsTableHead
    ),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full stack gap-y-12">
      <div className="w-full flex items-center justify-between">
        <h4>
          {translate(`dashboard.counters.${selectedDashboardSheet}` as any)}
        </h4>

        <SelectInput
          placeholder={translate("dashboard.processed-sheets.order-by.label")}
          className="bg-[#646A7820] !py-1 !px-2"
          wrapperClassName="!w-[188px] !text-body-sm"
          clearBtn
          floatOptions
          options={[
            {
              id: "descendent",
              name: translate(
                "dashboard.processed-sheets.order-by.options.descendent"
              ),
            },
          ]}
        />
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
