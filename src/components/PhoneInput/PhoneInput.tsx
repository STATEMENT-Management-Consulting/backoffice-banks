import { HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";
import { useBaseInput } from "./useBaseInput";
import { UseFormRegisterReturn } from "react-hook-form";
import { PhoneInput as IntPhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import styles from "./BaseInput.module.css";
import { cn } from "@/styles/utils";

interface IBaseInput {
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  customStyle?: any;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  value?: string;
  required?: boolean;
  label?: string;
  onFocus?: () => void;
  register?: UseFormRegisterReturn<string>;
  error?: string;
  min?: string;
  disabled?: boolean;
  autoComplete?: string;
  onClick?: () => void;
  onBLur?: (event: any) => void;
}

export const PhoneInput = forwardRef<HTMLInputElement | null, IBaseInput>(
  (
    {
      onChange,
      type = "text",
      customStyle,
      value,
      placeholder,
      className,
      required,
      wrapperClassName,
      label,
      onFocus,
      register,
      error,
      disabled,
    },
    ref
  ) => {
    const { inputRef, focusInput } = useBaseInput({
      ref,
      onFocus,
      register,
      type,
    });

    return (
      <div className={`w-full stack gap-y-[0.68rem] ${wrapperClassName}`}>
        {label && (
          <label
            className={cn(
              `!text-body-md md:!text-body-lg font-medium text-dark-blue-shade1 self-start`,
              disabled && "!opacity-[.3]"
            )}
            htmlFor={disabled ? undefined : label}
          >
            {label}
            {required && (
              <span className="text-red-shade6 font-bold text-body-xl"> *</span>
            )}
          </label>
        )}

        <div
          className={cn(
            styles.BaseInput,
            className,
            `[&_*]:!bg-white group/base-input border border-gray-shade11 focus-within:border-primary flex items-center gap-x-[0.62rem] px-4 !py-2 rounded-[0.625rem] [&:has(input:auto-fill)]:bg-blue-shade6 [&_*]:!border-none [&_button]:!p-0`,
            disabled ? "[&_input]:!opacity-[.3]" : undefined
          )}
          onClick={disabled ? undefined : focusInput}
          data-error={!!error}
        >
          <IntPhoneInput
            {...register}
            ref={inputRef as any}
            data-error={!!error}
            style={{ width: "100%", ...customStyle }}
            defaultCountry="ao"
            forceDialCode
            onChange={onChange}
            disabled={disabled}
            inputStyle={{
              width: "100%",
              padding: "0 1rem",
              border: "none",
              fontSize: "1rem",
            }}
            placeholder={placeholder}
            value={value}
          />
        </div>

        {error && (
          <p className="text-body-sm font-medium self-start text-red-shade6">
            {error}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
