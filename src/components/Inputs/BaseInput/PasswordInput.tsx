import styles from "./BaseInput.module.css";

import { forwardRef } from "react";
import { useBaseInput } from "./useBaseInput";
import { useOpen } from "@/utilities/hooks/useOpen";
import { EyeSlashIcon } from "@/assets/feather-icons/EyeSlashIcon";
import { Eye } from "@/assets/feather-icons/Eye";
import { UseFormRegisterReturn } from "react-hook-form";

interface IPasswordInput {
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  value?: string;
  required?: boolean;
  label?: string;
  onFocus?: () => void;
  register?: UseFormRegisterReturn<string>;
  error?: string;
}

export const PasswordInput = forwardRef<
  HTMLInputElement | null,
  IPasswordInput
>(
  (
    {
      onChange,
      className,
      value,
      placeholder,
      required,
      wrapperClassName,
      label,
      onFocus,
      register,
      error,
    },
    ref
  ) => {
    const { inputRef, handleOnChange, focusInput } = useBaseInput({
      ref,
      onChange,
      onFocus,
    });
    const { isOpen, toggleOpen } = useOpen();

    return (
      <div className={`w-full stack gap-y-[0.68rem] ${wrapperClassName}`}>
        {label && (
          <label
            className="text-body-md font-medium text-dark-blue-shade1"
            htmlFor={label}
          >
            {label}
            {required && (
              <span className="text-red-shade6 font-bold text-body-xl"> *</span>
            )}
          </label>
        )}
        <div
          className={`${styles.BaseInput} group/base-input ${className} border border-gray-shade11 focus-within:border-primary flex items-center gap-x-[0.62rem] px-[1.25rem] py-4 rounded-[0.625rem] min-w-max [&:has(input:auto-fill)]:bg-blue-shade6`}
          onClick={focusInput}
          data-error={!!error}
        >
          <input
            ref={inputRef}
            id={label}
            type={isOpen ? "text" : "password"}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
            autoComplete="false"
            className="outline-none placeholder-gray-shade7 text-dark-blue-shade2 bg-transparent flex-grow"
            {...register}
          />
          <button
            className="button-empty [&:hover>*]:stroke-primary "
            onClick={toggleOpen}
            type="button"
            title={isOpen ? "Hide Password" : "Show Password"}
          >
            {isOpen ? EyeSlashIcon : Eye}
          </button>
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

PasswordInput.displayName = "PasswordInput";
