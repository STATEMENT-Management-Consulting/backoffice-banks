import { ReactNode } from "react";
import { ChevronDownIcon } from "@/assets/feather-icons/ChevronDownIcon";
import { ChevronUpIcon } from "@/assets/feather-icons/ChevronUpIcon";
import { useOpen } from "@/utilities/hooks/useOpen";

interface IAccordion {
  label: string;
  className?: string;
  children: ReactNode;
  initialStatus: boolean;
  labelClassName?: string;
}

export function Accordion({
  label,
  children,
  className,
  labelClassName,
  initialStatus = false,
}: IAccordion) {
  const { isOpen, toggleOpen } = useOpen(initialStatus);

  return (
    <div className={`w-full !${className}`}>
      <div
        className="w-full cursor-pointer flex justify-between"
        onClick={toggleOpen}
      >
        <h6 className={`${labelClassName ? labelClassName : "text-body-md"}`}>
          {label}
        </h6>
        {isOpen ? ChevronUpIcon : ChevronDownIcon}
      </div>
      <div className={`w-full transition-all ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
}
