import { TabList } from "@/components/Tabs/TabList";
import { TabTrigger } from "@/components/Tabs/TabTrigger";
import * as Tabs from "@radix-ui/react-tabs";
import { useGetCompanyTabs } from "./utils";
import { useCompanyContext } from "../../context/useCompanyContext";
export function CompanyTabs() {
  const { items } = useGetCompanyTabs();
  const { activeTab, setActiveTab } = useCompanyContext();

  return (
    <div className="max-w-[80rem] w-full !px-0">
      <Tabs.Root
        defaultValue={items[0]?.id}
        className="overflow-x-auto lg:overflow-hidden"
      >
        <TabList>
          {items.map((tab) => (
            <TabTrigger
              onClick={() => setActiveTab(tab?.id as any)}
              key={tab?.id}
              value={tab?.id}
              className="!px-6 lg:!px-[2.375rem]"
            >
              {tab?.name}
            </TabTrigger>
          ))}
        </TabList>
      </Tabs.Root>
    </div>
  );
}
