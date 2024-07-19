import dynamic from "next/dynamic";
import { IModal } from "./ModalBody";

const ModalBody = dynamic(
  () => import("./ModalBody").then((mod) => mod.ModalBody),
  { ssr: false }
);

export function Modal({ isOpen, ...rest }: IModal) {
  if (!isOpen) return null;

  return <ModalBody isOpen {...rest} />;
}
