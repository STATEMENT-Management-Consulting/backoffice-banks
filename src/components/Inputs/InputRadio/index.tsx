import { cn } from "@/styles/utils";

interface IInputRadio {
  isSelected: boolean;
  placeholder: string;
  onClick: () => void;
  className?: string;
  variant?: "simple" | "default";
  color?: "green" | "orange" | "red";
}

export function InputRadio({
  placeholder,
  isSelected,
  onClick,
  className,
  variant = "default",
  color,
}: IInputRadio) {
  const variants = {
    simple: "flex-row-reverse justify-end w-max border-none !p-0",
    default: "",
  };

  const colors = {
    orange: "!text-orange-shade1",
    green: "!text-green-shade6",
    red: "!text-red-shade6",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        `flex  cursor-pointer hover:border-primary items-center px-[1rem] py-[1.25rem] rounded-[0.625rem] border-[1px] border-gray-shade11 gap-x-[0.62rem] ${
          isSelected ? "border-primary" : ""
        } `,
        className,
        variants[variant],
        color ? colors[color] : undefined
      )}
    >
      <span className="text-[0.875rem] font-[500]">{placeholder}</span>
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
