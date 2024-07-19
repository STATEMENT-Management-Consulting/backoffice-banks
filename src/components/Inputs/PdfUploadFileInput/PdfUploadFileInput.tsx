import { RemoveIcon } from "@/assets/feather-icons/RemoveIcon";
import { TrashIcon } from "@/assets/feather-icons/TrashIcon";
import { UploadIcon } from "@/assets/feather-icons/UploadIcon";
import { DynamicPDF } from "@/components/Viewers/PDFViewer/DynamicPDFViewer";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useComponentsDictionary } from "locales/t/components";
import { ChangeEvent, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type PdfUploadFileInputProps = {
  defaultDoc?: string;
  label?: string;
  file: File | null;
  setFile: (file: File | null) => void;
  isDisabled?: boolean;
  error?: string;
  id?: string;
  defaultDocName?: string;
  isEditable?: boolean;
  placeholder?: string;
  className?: string;
  maxSize?: number;
  maxSizeLabel?: string;
  onClick?: () => void;
};

export const PdfUploadFileInput = ({
  label,
  file,
  setFile,
  isDisabled,
  defaultDoc,
  defaultDocName,
  error,
  id,
  className,
  isEditable = true,
  placeholder,
  maxSize,
  maxSizeLabel,
  onClick,
}: PdfUploadFileInputProps) => {
  const [doc, setDoc] = useState(defaultDoc);
  const [innerError, setInnerError] = useState(error);
  const componentsDictionary = useComponentsDictionary();
  const { isOpen: isTrue, onClose: turnFalse, onOpen: turnTrue } = useOpen();

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // don't upload if file is too big (max 5MB)
      if (file.size > (maxSize ?? 5194304)) {
        setInnerError(
          componentsDictionary("PdfUploadFileInput.errors.is-bigger")
        );
      } else {
        innerError && setInnerError(undefined);
        setFile(file);
      }
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0]) {
        setDoc(undefined);
        setFile(acceptedFiles[0]);
      }
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: maxSize ?? 5194304, // 5MB
  });

  return (
    <div onClick={onClick} className={"stack gap-y-[0.625rem] " + className}>
      {label && (
        <label
          className="text-body-md font-medium text-dark-blue-shade1 self-start"
          htmlFor={id ?? label}
        >
          {label}
        </label>
      )}
      <div
        onClick={onClick}
        className={`stack gap-y-[0.625rem] border ${
          isDisabled
            ? "text-gray-200!important"
            : error || innerError
            ? "text-red-shade6"
            : "text-gray-200"
        } ${
          error || innerError
            ? "border-red-shade6"
            : "hover:!border-gray-shade11"
        } ${
          isDragActive ? "bg-[#e5eff4]" : ""
        } justify-center border-gray-shade11 px-[1.25rem] py-4 rounded-[0.625rem] `}
      >
        {((file || doc) && (
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
                {defaultDocName ?? placeholder}
              </p>
            )}
            {!isDisabled && isEditable && (
              <button
                type="button"
                className="[&>svg>*]:stroke-red-shade6 button-empty"
                title={componentsDictionary("PdfUploadFileInput.remove-file")}
                onClick={() => {
                  setFile(null);
                  setDoc(undefined);
                }}
              >
                {TrashIcon}
              </button>
            )}
          </div>
        )) || (
          <label
            htmlFor={id ?? label ?? "upload-file"}
            className="flex items-center justify-between cursor-pointer"
            {...getRootProps({
              onClick: (event: { stopPropagation: () => any }) =>
                event.stopPropagation(),
            })}
          >
            <input
              {...(getInputProps() as any)}
              type="file"
              accept=".pdf, application/pdf"
              id={id ?? label ?? "upload-file"}
              className="hidden"
              onChange={handleUploadFile}
              disabled={isDisabled}
            />
            <p className=" text-gray-shade7 cursor-pointer">
              {componentsDictionary("PdfUploadFileInput.label")}
            </p>
            <label
              className={`text-[1rem] flex items-center gap-x-[5px] capitalize cursor-pointer ${
                error || innerError ? "stroke-red-shade6" : "stroke-primary"
              }`}
              htmlFor={id ?? label ?? "upload-file"}
            >
              {UploadIcon}
            </label>
          </label>
        )}
      </div>

      {maxSizeLabel && (
        <p className="text-body-sm font-medium self-start text-gray-shade8">
          {componentsDictionary("PdfUploadFileInput.max-size-label", {
            maxSize: maxSizeLabel ?? "5MB",
          })}
        </p>
      )}
      {error && (
        <p className="text-body-sm font-medium self-start text-red-shade6">
          {error}
        </p>
      )}
      {isTrue && (
        <DynamicPDF
          pdf={file ? URL.createObjectURL(file) : defaultDoc ?? doc ?? ""}
          onClose={turnFalse}
        />
      )}
    </div>
  );
};

PdfUploadFileInput.displayname = "PdfUploadFileInput";
