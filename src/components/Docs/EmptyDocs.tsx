import { FileUploadIcon } from "@/assets/feather-icons/FileUploadIcon";
import { EmptyDocsSvg } from "./EmptyDocsSvg";
import { useComponentsDictionary } from "locales/t/components";

interface IEmptyDocs {
  appendDoc?: () => void;
  className?: string;
  unavailable?: boolean;
}

export function EmptyDocs({ appendDoc, className, unavailable }: IEmptyDocs) {
  const componentDictionary = useComponentsDictionary();

  return (
    <div className={`stack-center gap-y-6 ${className}`}>
      {EmptyDocsSvg}
      <div className="stack gap-y-4">
        <h3>
          {componentDictionary(
            unavailable ? "EmptyDocs.unavailable" : "EmptyDocs.no-append"
          )}
        </h3>
        {appendDoc && (
          <p className="text-body-xl text-text-dark">
            {componentDictionary("EmptyDocs.info")}
          </p>
        )}
      </div>
      {appendDoc && (
        <button type="button" className="button-primary" onClick={appendDoc}>
          {FileUploadIcon} {componentDictionary("EmptyDocs.append")}
        </button>
      )}
    </div>
  );
}
