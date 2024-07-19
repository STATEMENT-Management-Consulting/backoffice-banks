import { ReactNode, forwardRef } from "react";

interface ISelectInputItem {
  className?: string;
  value: string;
  children?: ReactNode;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const SelectInputItem = forwardRef<HTMLDivElement, ISelectInputItem>(
  (
    { children, className, onSelect, value, isSelected, ...props },
    forwardedRef
  ) => {
    return (
      <div
        aria-label="select input"
        aria-selected={isSelected}
        role="option"
        ref={forwardedRef}
        className={`item pr-4 py-[1.06rem] min-w-[200px] text-left first:rounded-t-[0.625rem] last:rounded-b-[0.625rem] text-text hover:!text-primary pl-4 hover:bg-primary hover:bg-opacity-10 transition-[padding] ${
          isSelected
            ? "!text-primary pl-4 bg-primary bg-opacity-10"
            : "hover:!pl-6 cursor-pointer"
        } flex items-center justify-start text-left gap-x-[0.62rem] ${className}`}
        onClick={onSelect}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SelectInputItem.displayName = "SelectInputItem ";
