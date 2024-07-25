import { DashboardCounters } from "./components/DashboardCounters/DashboardCounters";
import { DashboardHeader } from "./components/DashboardHeader";
import { ProcessedSheetsTable } from "./components/ProcessedSheetsTable/ProcessedSheetsTable";
import { DashboardContextProvider } from "./context/DashboardContext";

export function DashboardView() {
  return (
    <DashboardContextProvider>
      <div className="w-full stack gap-y-8 py-10 items-center h-full">
        <div className="max-w-[80rem] !pb-0 w-full stack gap-y-8">
          <DashboardHeader />
          <DashboardCounters />
        </div>

        <div className="w-full stack items-center bg-white pt-[6.8125rem] flex-1">
          <div className="w-full layout-max-width !px-0 !pt-0">
            <ProcessedSheetsTable />
          </div>
        </div>
      </div>
    </DashboardContextProvider>
  );
}
