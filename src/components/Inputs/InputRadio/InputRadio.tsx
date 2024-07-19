import React from "react";

interface IInputRadio {
  isSelected: boolean;
  placeholder: string;
  onClick: () => void;
  icon?: JSX.Element | React.ReactNode;
}

export function InputRadio({
  placeholder,
  isSelected,
  onClick,
  icon,
}: IInputRadio) {
  return (
    <div
      onClick={onClick}
      className="flex  cursor-pointer hover:border-primary items-center px-[1rem] py-[1.25rem] rounded-[0.625rem] border-[1px] border-gray-shade11 gap-x-[0.62rem]"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[0.875rem] font-[500]">{placeholder}</span>
      </div>
      <div
        className={`w-[1.25rem] h-[1.25rem] rounded-full border ${
          isSelected
            ? "border-primary border-[5px] p-[2px]"
            : "border-gray-shade11"
        }`}
      >
        {isSelected && <div className="w-full h-full rounded-full white" />}
      </div>
    </div>
  );
}
