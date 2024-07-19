import styles from "./BaseInput.module.css";

import { HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";
import { useBaseInput } from "./useBaseInput";
import { UseFormRegisterReturn } from "react-hook-form";

interface IBaseInput {
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
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
      leftElement: leftIcon,
      rightElement: rightIcon,
      className,
      value,
      placeholder,
      required,
      wrapperClassName,
      label,
      onFocus,
      register,
      error,
      onClick,
      min,
      disabled,
      autoComplete = "off",
    },
    ref
  ) => {
    const { inputRef, handleOnChange, focusInput } = useBaseInput({
      ref,
      onChange,
      onFocus,
      register,
      type,
    });

    return (
      <div className={`w-full stack gap-y-[0.68rem] ${wrapperClassName}`}>
        {label && (
          <label
            className="text-body-lg font-medium text-dark-blue-shade1 self-start"
            htmlFor={disabled ? undefined : label}
          >
            {label}
            {required && (
              <span className="text-red-shade6 font-bold text-body-xl"> *</span>
            )}
          </label>
        )}
        <div
          className={`${styles.BaseInput} group/base-input ${className} border border-gray-shade11 focus-within:border-primary flex items-center gap-x-[0.62rem] px-5 py-4 rounded-[0.625rem] min-w-max [&:has(input:auto-fill)]:bg-blue-shade6`}
          onClick={disabled ? undefined : focusInput}
          data-error={!!error}
        >
          {leftIcon}
          <input
            ref={inputRef}
            id={label}
            type={type === "number" ? "string" : type}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
            className="outline-none placeholder-gray-shade7 text-dark-blue-shade2 bg-transparent flex-grow"
            min={min}
            disabled={disabled}
            autoComplete={autoComplete}
            onClick={onClick}
            {...register}
          />
          {rightIcon}
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
