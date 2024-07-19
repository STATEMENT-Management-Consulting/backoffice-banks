import { MinusIcon } from "@/assets/MinusIcon";
import { GreenCheckIcon } from "@/assets/feather-icons/GreenCheckIcon";
import { cn } from "@/styles/utils";
import { useState } from "react";

interface IToggleButton {
  left?: string;
  right?: string;
  startValue?: boolean;
  setValue: (value: boolean) => void;
  disabled?: boolean;
  bg?: string;
  variant?: "small" | "big" | "medium";
}

export function ToggleButton({
  left,
  right,
  setValue,
  startValue,
  variant,
  disabled,
  bg = "green-shade6",
}: IToggleButton) {
  const [change, setChange] = useState<boolean>(startValue ? true : false);

  const handleToggle = () => {
    if (disabled) {
      setChange(change);
    } else {
      setChange(change ? false : true);
      setValue(change ? false : true);
    }
  };

  const handleChange = (value: boolean) => {
    setChange(value);
    setValue(value);
  };

  return (
    <div className="flex items-center gap-x-[0.62rem]">
      {left && (
        <span
          onClick={() => handleChange(false)}
          className={`text-[0.75rem] cursor-pointer ${
            change
              ? "font-semibold text-gray-shade7"
              : "font-semibold text-dark-blue-shade2"
          }`}
        >
          {left}
        </span>
      )}
      <div
        className={cn(
          "rounded-[62.5rem] w-[2.75rem] h-[1.625rem] cursor-pointer",
          variant === "small" ? "!w-[2rem] h-4" : "w-[2.75rem] h-7",
          `relative flex items-center`,
          change ? `bg-${bg}` : "bg-[#CBD5E0]"
        )}
        onClick={handleToggle}
      >
        <div
          className={cn(
            "transition-all relative  border-[0.12rem] w-[1.375rem] h-[1.375rem]",
            variant === "small" ? "w-4 h-4" : "w-6 h-6",
            "rounded-[62.5rem]  bg-white flex items-center justify-center",
            change ? `ml-auto border-${bg}` : "ml-0 border-[#CBD5E0]"
          )}
        >
          {change ? GreenCheckIcon : MinusIcon}
        </div>
      </div>
      {right && (
        <span
          onClick={() => handleChange(true)}
          className={`text-[0.75rem] cursor-pointer ${
            change
              ? "font-semibold text-dark-blue-shade2"
              : "font-semibold text-gray-shade7"
          }`}
        >
          {right}
        </span>
      )}
    </div>
  );
}
