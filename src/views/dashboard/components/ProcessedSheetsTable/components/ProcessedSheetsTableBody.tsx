import { DownloadFileIcon } from "@/assets/feather-icons/DownloadFileIcon";
import { DownloadIcon } from "@/assets/feather-icons/DownloadIcon";
import { Avatar } from "@/components/Avatar/Avatar";
import { Badge } from "@/components/Badge/Badge";
import { Tr } from "@/components/Table/Tr";
import { useDashboardContext } from "@/views/dashboard/context/useDashboardContext";
import { useDashboardDictionary } from "locales/t/dashboard";
import { Fragment } from "react";

export function ProcessedSheetsTableBody() {
  const { translate } = useDashboardDictionary();
  const { selectedDashboardSheet } = useDashboardContext();

  const data =
    selectedDashboardSheet === "processed-sheets"
      ? Array(6).fill(0)
      : selectedDashboardSheet === "pending-sheets"
      ? Array(2).fill(0)
      : Array(4).fill(0);

  return data.map((_, index) => (
    <Fragment key={index}>
      <Tr>
        <td className="flex items-center gap-x-4">
          <Avatar className="w-6 h-6 rounded-full" name="Mirantes" />
          <div className="stack">
            <p className="text-body-sm">Mirantes Technologies</p>
            <span className="text-[10px] text-gray-shade8">rh@mirantes.io</span>
          </div>
        </td>

        <td className="text-body-sm text-center">00231DC</td>
        <td className="text-body-sm text-center bold">AOA 12.131.031,01</td>
        <td className="text-body-sm text-center">02/03/2023</td>
        <td className="text-body-sm text-center font-bold">02/03/2023</td>
        <td className="text-body-sm text-center">
          <Badge
            label="Processado"
            className="bg-green-shade2 [&>_*]:text-green-shade6 bg-opacity-10 flex-center"
          />
        </td>
        <td className="text-body-sm stack items-center">
          <button className="flex items-center">
            {DownloadFileIcon}
            <span className="text-primary text-body-sm">
              {translate("dashboard.header.download-reports")}
            </span>
          </button>
        </td>
      </Tr>
    </Fragment>
  ));
}
