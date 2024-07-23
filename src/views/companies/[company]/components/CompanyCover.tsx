import { FileUploadIcon } from "@/assets/feather-icons/FileUploadIcon";
import { Avatar } from "@/components/Avatar/Avatar";
import { Button } from "@/components/Button/Button";
import { useCompaniesDictionary } from "locales/t/companies";
import Image from "next/image";

export function CompanyCover() {
  const { translate } = useCompaniesDictionary();

  return (
    <div className="w-full stack relative  items-center">
      <div className="w-full bg-gradient-to-r  from-[#000030] to-[#00026D] h-[142px]"></div>

      <div className="layout-max-width !py-0 !px-0 relative -top-7 z-10">
        <div className="flex items-end justify-between w-full">
          <div className="flex gap-x-5 items-end">
            <Avatar
              src=""
              className="w-28 h-28 rounded-lg"
              name="Mirantes Technologies"
            />

            <div className="stack pb-2 items-start gap-y-1">
              <h4>Mirantes Technologies</h4>

              <span className="text-body-sm text-gray-shade8">Tecnologia</span>
            </div>
          </div>

          <Button className="button bg-primary text-white [&>svg_*]:fill-white py-4 px-6 flex items-center gap-x-2">
            <span>{translate("company.download-report")}</span>
            {FileUploadIcon}
          </Button>
        </div>
      </div>
    </div>
  );
}
