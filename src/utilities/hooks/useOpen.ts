import { useState } from "react";

export function useOpen(defaultState = false) {
  const [isOpen, setIsOpen] = useState(() => defaultState);

  const onClose = () => setIsOpen(false);

  const onOpen = () => setIsOpen(true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return { isOpen, onClose, onOpen, toggleOpen };
}
