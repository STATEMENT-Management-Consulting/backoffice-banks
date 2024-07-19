import { useOpen } from "@/utilities/hooks/useOpen";
import { ReactNode } from "react";

interface IAccordion {
  children: ReactNode;
  collapse?: boolean;
  trigger: ReactNode;
}

export function Accordion({ children, collapse, trigger }: IAccordion) {
  const { isOpen, toggleOpen } = useOpen(collapse);

  return (
    <div>
      <button type="button" onClick={toggleOpen} className="cursor-pointer">
        {trigger}
      </button>
      {isOpen && (
        <div className="transition-[height] duration-300">{children}</div>
      )}
    </div>
  );
}
