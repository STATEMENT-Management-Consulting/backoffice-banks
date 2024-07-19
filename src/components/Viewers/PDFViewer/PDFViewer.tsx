import { Modal } from "@/components/Modal/Modal";

type TPDFViewer = {
  pdf: string;
  onClose: () => void;
};

export const PDFViewer = ({ pdf, onClose }: TPDFViewer) => {
  return (
    <Modal
      isOpen
      onClose={onClose}
      className="w-[min(800px,_calc(100vw_-_theme(spacing.10)))] !p-0 !overflow-hidden"
      bodyClassName="!p-0"
    >
      <iframe
        src={pdf}
        className="w-full min-h-[min(800px,_calc(100vh_-_theme(spacing.10)_-_theme(spacing.4)))]"
      />
    </Modal>
  );
};
