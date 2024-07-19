import { CheckIcon } from "@/assets/feather-icons/CheckIcon";
import React, { useState } from "react";

interface ICheckboxInput {
  label?: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
  dark?: boolean;
}

export function CheckboxInput({
  label,
  onChange,
  value = false,
  dark,
}: ICheckboxInput) {
  const [isChecked, setChecked] = useState<boolean>(value);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
    onChange?.(!isChecked);
  };

  return (
    <label
      className="flex items-center gap-x-2 cursor-pointer"
      onClick={handleCheckboxChange}
    >
      <div
        className={`rounded-[0.375rem] border transition-colors ${
          dark ? "border-gray-shade15" : "border-gray-shade11"
        } w-5 h-5 flex-center ${
          isChecked ? (dark ? "bg-dark-blue-shade2" : "bg-primary") : ""
        }`}
      >
        {CheckIcon}
      </div>
      <span className="text-gray-shade7 text-sm select-none">{label}</span>
    </label>
  );
}
