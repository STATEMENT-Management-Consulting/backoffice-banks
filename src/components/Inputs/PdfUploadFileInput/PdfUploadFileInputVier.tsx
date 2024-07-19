import { UploadIcon } from "@/assets/feather-icons/UploadIcon";
import { DynamicPDF } from "@/components/Viewers/PDFViewer/DynamicPDFViewer";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useComponentsDictionary } from "locales/t/components";
import { useState } from "react";

type PdfUploadFileInputProps = {
  defaultDoc?: string;
  label?: string;
  file: File | null;
  defaultDocName?: string;
  className?: string;
};

export const PdfUploadFileInputVier = ({
  file,
  defaultDoc,
  defaultDocName,
  className,
}: PdfUploadFileInputProps) => {
  const [doc] = useState(defaultDoc);
  const componentsDictionary = useComponentsDictionary();
  const { isOpen: isTrue, onClose: turnFalse, onOpen: turnTrue } = useOpen();

  return (
    <div className={"stack gap-y-[0.625rem] " + className}>
      <div
        className={`stack gap-y-[0.625rem] border text-gray-200 justify-center border-gray-shade11 px-[1.25rem] py-4 rounded-[0.625rem] `}
      >
        <div className="flex items-center">
          {!defaultDoc ? (
            <p
              className="text-[0.813rem] leading-5 text-primary flex-grow line-clamp-1 hover:underline cursor-pointer"
              onClick={() => turnTrue()}
            >
              {doc ?? file?.name}
            </p>
          ) : (
            <p
              className="text-[0.813rem] leading-5 text-primary flex-grow line-clamp-1 hover:underline cursor-pointer"
              onClick={() => turnTrue()}
            >
              {defaultDocName}
            </p>
          )}
          <button
            type="button"
            className="[&>svg>*]:stroke-primary button-empty"
            title={componentsDictionary("PdfUploadFileInput.remove-file")}
            onClick={() => turnTrue()}
          >
            {UploadIcon}
          </button>
        </div>
      </div>

      {isTrue && (
        <DynamicPDF
          pdf={file ? URL.createObjectURL(file) : defaultDoc ?? doc ?? ""}
          onClose={turnFalse}
        />
      )}
    </div>
  );
};

PdfUploadFileInputVier.displayname = "PdfUploadFileInputVier";
