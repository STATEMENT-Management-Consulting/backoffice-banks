import { PDFIlcon } from "@/assets";
import { limitStringWithDots } from "@/utilities/helpers/strings";
import { split } from "lodash";
import { useEffect, useState } from "react";
import { ViewImage } from "../ViewImage/ViewImage";
import { PDFViewer } from "../Viewers/PDFViewer/PDFViewer";
import { PDFIcon } from "@/assets/PDFIcon";

export function RenderFile({ attachment }: { attachment: any }) {
  const [fileType, setFileType] = useState<string>();
  const [viewFile, setViewFile] = useState<boolean>(false);

  useEffect(() => {
    fetch(attachment?.attachment)
      .then((response) => response.blob())
      .then((blob) => {
        setFileType(blob.type);
      });
  }, []);

  return (
    <div className="flex-1 md:flex-none">
      {" "}
      {split(fileType, "/")[0] === "image" ? (
        <div
          onClick={() => setViewFile(true)}
          className="flex-1 min-w-[182px] md:flex-none group/card relative h-[137px] rounded-lg"
        >
          <img
            className="w-full h-full rounded-lg object-cover"
            src={attachment?.attachment ? attachment?.attachment : undefined}
            alt={attachment?.name}
          />
        </div>
      ) : (
        <div
          onClick={() => setViewFile(true)}
          className="flex-1 min-w-[182px] md:flex-none group/card relative h-[137px] rounded-lg gap-y-4 border border-gray-200 flex-center"
        >
          <div className="stack items-center gap-y-4 p-2">
            <PDFIcon className="!w-10" />
            <span className="text-body-lg text-center text-gray-shade16">
              {limitStringWithDots(attachment?.name, 20) + ".pdf"}
            </span>
          </div>
        </div>
      )}
      {viewFile ? (
        split(fileType, "/")[0] === "image" ? (
          <ViewImage
            onClose={() => setViewFile(false)}
            image={attachment?.attachment}
          />
        ) : (
          <PDFViewer
            onClose={() => setViewFile(false)}
            pdf={attachment?.attachment}
          />
        )
      ) : null}
    </div>
  );
}
