import { FileUploadIcon } from "@/assets/feather-icons/FileUploadIcon";
import { PDFIcon } from "@/assets/PDFIcon";
import { Avatar } from "@/components/Avatar/Avatar";
import { Button } from "@/components/Button/Button";
import { useDashboardDictionary } from "locales/t/dashboard";

export function DashboardHeader() {
  const { translate } = useDashboardDictionary();
  return (
    <div className="flex items-center !px-0  border-b w-full pb-8 justify-between">
      <div className="flex items-center gap-x-4">
        <Avatar name="" src="" className="w-[4.5rem] h-[4.5rem] rounded-full" />

        <div className="stack gap-y-1">
          <h6 className="text-body-md font-medium">
            {translate("dashboard.header.title")}

            <span className="font-bold">Garcia</span>
          </h6>

          <span className="text-body-sm text-gray-shade8">
            Banco Angolano de Investimentos, S.A.
          </span>
        </div>
      </div>

      <Button className="button bg-primary text-white [&>svg_*]:fill-white py-4 px-6 flex items-center gap-x-2">
        <span>{translate("dashboard.header.download-reports")}</span>
        {FileUploadIcon}
      </Button>
    </div>
  );
}
