import { useProcessSalaryDictionary } from "locales/t/process-salary";
import { ProcessSalaryHeader } from "./components/ProcessSalaryHeader";
import { ProcessSalaryCards } from "./components/ProcessSalaryCards/ProcessSalaryCards";
import { ProcessSalaryTable } from "./components/ProcessSalaryTable/ProcessSalaryTable";
import { ProcessModal } from "./components/ProcessModal";

export function ProcessSalaryView() {
  const { translate } = useProcessSalaryDictionary();

  return (
    <div className="w-full pt-10 relative stack gap-y-8 h-full items-center">
      <ProcessSalaryHeader />

      <div className="w-full flex-1 bg-white stack py-8 items-center">
        <div className="w-full max-w-[80rem]  stack gap-y-8">
          <ProcessSalaryCards />

          <ProcessSalaryTable />
        </div>
      </div>
    </div>
  );
}
