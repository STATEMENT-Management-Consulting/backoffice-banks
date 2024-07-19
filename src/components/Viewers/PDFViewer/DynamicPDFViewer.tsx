import dynamic from "next/dynamic";

export const DynamicPDF = dynamic(() =>
  import("./PDFViewer").then((mod) => mod.PDFViewer)
);
