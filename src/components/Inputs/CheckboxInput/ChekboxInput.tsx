import { cn } from "@/styles/utils";
import { UseFormRegisterReturn } from "react-hook-form";
import { FiCheck } from "react-icons/fi";

type TCheckboxInput = {
  register?: UseFormRegisterReturn<string>;
  name?: string;
  id?: string;
  label?: string;
  onClick?: (value?: string | null) => void;
  onRemove?: (value: string) => void;
};

export function CheckboxInput({
  register,
  onClick,
  name,
  id,
  label,
  onRemove,
}: TCheckboxInput) {
  return (
    <div className="flex items-start gap-2">
      <input
        onChange={(e) => {
          e.target.checked
            ? onClick?.(e.target.name)
            : onRemove?.(e.target.name);
        }}
        {...register}
        type="checkbox"
        name={name}
        id={id}
      />
      <label className="text-gray-shade7 -mt-1 text-sm">{label}</label>
    </div>
  );
}

export function Checkbox({
  value,
  onChange,
  label,
  className,
  colors,
}: {
  value: boolean;
  label?: string;
  className?: string;
  colors?: {
    bg: string;
    text: string;
  };
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center justify-start  gap-x-2 cursor-pointer hover:opacity-80",
        className
      )}
      role="button"
      onClick={() => onChange(!value)}
    >
      <div
        className={cn(
          "border border-gray-shade11 rounded-md !p-1 [&_svg_*]:stroke-white",
          value ? colors?.bg ?? "bg-primary" : ""
        )}
        aria-checked={`${value}`}
      >
        <FiCheck />
      </div>
      <span
        className={cn(
          "text-sm",
          !value ? "text-text-light" : colors?.text ?? "text-primary"
        )}
      >
        {label}
      </span>
    </button>
  );
}
