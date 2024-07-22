import { useDashboardDictionary } from "locales/t/dashboard";
import { Fragment, useState } from "react";
import { DashboardCounterCard } from "./DashboardCounterCard";
import { FileTextIcon } from "@/assets/feather-icons/FileTextIcon";
import { FileInfoIcon } from "@/assets/feather-icons/FileInfoIcon";
import { FileCheckIcon } from "@/assets/feather-icons/FileCheckIcon";
import { DateInput } from "@/components/Inputs/DateInput/DateInput";

export function DashboardCounters() {
  const { translate } = useDashboardDictionary();
  const [active, setActive] = useState("processed-sheets");

  const counters = [
    {
      id: "processed-sheets",
      label: translate("dashboard.counters.precessed-sheets"),
      value: 203,
      icon: FileTextIcon,
      active: true,
    },
    {
      id: "pending-sheets",
      label: translate("dashboard.counters.pending-sheets"),
      value: 90,
      icon: FileInfoIcon,
    },
    {
      id: "last-processions",
      label: translate("dashboard.counters.last-processions"),
      value: 120,
      icon: FileCheckIcon,
    },
  ];

  return (
    <div className="w-full stack items-center relative min-h-[14rem]">
      <div className="flex items-center w-full justify-between">
        <h4>{translate("dashboard.title")}</h4>

        <DateInput
          wrapperClassName="!max-w-[13rem] text-gray-shade7"
          className="bg-white text-gray-shade7 maw-w-[13rem]"
        />
      </div>

      <div className="grid grid-cols-3 absolute -bottom-20 gap-8">
        {counters?.map((counter) => (
          <Fragment key={counter.id}>
            <DashboardCounterCard
              setActive={() => setActive(counter?.id)}
              icon={counter?.icon}
              active={counter?.id === active}
              label={counter?.label}
              value={counter?.value}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
