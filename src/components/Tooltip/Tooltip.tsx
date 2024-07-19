import React, { ReactNode } from "react";

const Tooltip = ({
  label,
  children,
  className,
  tooltipClassName,
}: {
  label?: string | ReactNode;
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  tooltipClassName?: string;
}) => {
  return (
    <div
      className={`cursor-pointer [&>.tooltip-content]:hidden [&:hover>.tooltip-content]:flex relative group ml-auto ${className}`}
    >
      <div
        className={`tooltip-content absolute top-[50px] right-0 z-[70] mb-2 flex items-center justify-center w-auto p-[10px] bg-white text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md gap-x-[10px] ${tooltipClassName}`}
      >
        <div className="flex justify-center items-center bg-primary bg-opacity-[18%] h-[15px] w-[15px] rounded-full">
          <div className="bg-primary h-[11.5px] w-[11.5px] rounded-full"></div>
        </div>
        <p className="w-[200px]">{label}</p>
      </div>

      {children}
    </div>
  );
};

export default Tooltip;
