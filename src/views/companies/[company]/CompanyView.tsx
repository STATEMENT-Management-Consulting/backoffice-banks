import { Tabs } from "@radix-ui/react-tabs";
import { CompanyCover } from "./components/CompanyCover";
import { CompanySheetsFilter } from "./components/CompanySheetsFIlters";
import { CompanyTabs } from "./components/CompanyTabs/CompanyTabs";
import { CompanyContextProvider } from "./context/CompanyContext";
import { CompanyOverview } from "./components/CompanyOverview";
import dynamic from "next/dynamic";

const CompanySheetsTable = dynamic(
  () =>
    import("./components/CompanyTable/CompanySheetsTable").then(
      (mod) => mod.CompanySheetsTable
    ),
  {
    ssr: false,
  }
);

export function CompanyView() {
  return (
    <CompanyContextProvider>
      <div className="w-full stack gap-y-8 h-full items-center">
        <CompanyCover />
        <CompanyTabs />

        <CompanySheetsFilter />

        <div className="w-full layout-max-width !px-0 relative gap-x-8 flex-1 flex">
          <CompanySheetsTable />
          <CompanyOverview />
        </div>
      </div>
    </CompanyContextProvider>
  );
}
