import { FileUploadIcon } from "@/assets/feather-icons/FileUploadIcon";
import { Button } from "@/components/Button/Button";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useProcessSalaryDictionary } from "locales/t/process-salary";
import { ProcessModal } from "./ProcessModal";

export function ProcessSalaryHeader() {
  const { isOpen, onOpen, onClose } = useOpen();
  const { translate } = useProcessSalaryDictionary();

  return (
    <>
      <div className="w-full max-w-[80rem] justify-between flex items-center !px-0">
        <div className="stack gap-y-2">
          <h4>{translate("process-salary.title")}</h4>

          <p>
            {translate("process-salary.span")}{" "}
            <span className="text-primary font-semibold">
              Mirantes Technologies
            </span>
          </p>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <p className="text-body-md font-medium">
              {translate("process-salary.header.state")}
            </p>
            <span className="px-4 py-1 text-[10px] font-semibold rounded-lg text-[#CAA12E] bg-[#FFFAB840] bg-opacity-10">
              {translate("process-salary.header.states.pending")}
            </span>
          </div>

          <Button className="bg-white text-primary [&>svg_*]:fill-primary px-6 border-primary border">
            {translate("process-salary.header.download-sheet")}
            {FileUploadIcon}
          </Button>

          <Button
            onClick={() => onOpen()}
            label={translate("process-salary.header.process-now")}
            className="button-primary px-6 text-white"
          />
        </div>
      </div>

      {isOpen && <ProcessModal onClose={onClose} />}
    </>
  );
}
