import { DownloadFileIcon } from "@/assets/feather-icons/DownloadFileIcon";
import { Tr } from "@/components/Table/Tr";
import { useCompaniesDictionary } from "locales/t/companies";
import { Fragment } from "react";
import { useCompanyContext } from "../../../context/useCompanyContext";

export function CompanySheetsTableBody() {
  const { translate } = useCompaniesDictionary();
  const { activeTab } = useCompanyContext();
  const data =
    activeTab === "all-sheets"
      ? Array(6).fill(0)
      : activeTab === "new-sheets"
      ? Array(2).fill(0)
      : Array(4).fill(0);

  return data.map((_, index) => (
    <Fragment key={index}>
      <Tr>
        <td className="text-body-sm">00231DC</td>
        <td className="text-body-sm">02/03/2023</td>
        <td className="text-body-sm font-bold">02/03/2023</td>
        <td>
          <span className="px-4 py-1 text-body-sm font-bold  rounded-lg text-green-shade6 bg-green-shade6 bg-opacity-10">
            Processado
          </span>
        </td>
        <td className="text-body-sm">
          <button className="flex !p-0 items-center">
            {DownloadFileIcon}
            <span className="text-primary text-body-sm">
              {translate("company.download-report")}
            </span>
          </button>
        </td>
      </Tr>
    </Fragment>
  ));
}
