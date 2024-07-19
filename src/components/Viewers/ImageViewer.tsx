import { Modal } from "../Modal/Modal";
import Image from "next/image";

interface IImageViewer {
  image: string;
  onClose: () => void;
}

export function ImageViewer({ image, onClose }: IImageViewer) {
  return (
    <Modal
      onClose={onClose}
      className="relative max-w-[min(100%,_500px)] max-h-[min(100%,_600px)]"
      isOpen={!!image}
      overlayClickable
      centered
    >
      <Image src={image} alt="" className="object-cover rounded-2xl" />
    </Modal>
  );
}
