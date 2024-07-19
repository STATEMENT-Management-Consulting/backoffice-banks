import { isValid } from "date-fns";
import { BaseInput } from "../BaseInput/BaseInput";
import format from "date-fns/format";

interface IDateInput {
  value?: Date;
  required?: boolean;
  label?: string;
  onChange?: (value: Date) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  min?: Date;
  max?: Date;
}

export function DateInput({
  label,
  required,
  value,
  onChange,
  error,
  disabled,
  className,
  max,
  min,
}: IDateInput) {
  const date =
    value && isValid(new Date(value))
      ? format(new Date(value), "yyyy-MM-dd")
      : "";

  const handleChange = (v: string) => {
    if (isValid(new Date(v))) {
      onChange?.(new Date(v));
    }
  };

  return (
    <>
      <BaseInput
        label={label}
        type="date"
        required={required}
        value={date}
        onChange={handleChange}
        error={error}
        disabled={disabled}
        className={className}
        min={min ? format(min, "yyyy-MM-dd") : undefined}
        max={max ? format(max, "yyyy-MM-dd") : undefined}
      />
    </>
  );
}
