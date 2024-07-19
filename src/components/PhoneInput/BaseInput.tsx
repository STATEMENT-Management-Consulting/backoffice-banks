import styles from "./BaseInput.module.css";

import {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ReactNode,
  forwardRef,
} from "react";
import { useBaseInput } from "./useBaseInput";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/styles/utils";
import { Spinner } from "../Spinner/Spinner";

export interface IBaseInput {
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
  min?: string | number;
  max?: string | number;
  disabled?: boolean;
  maxLength?: number;
  classNameInput?: string;
  autoComplete?: string;
  onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
  isLoading?: boolean;
  rightElementClick?: () => void;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  readonly?: boolean;
  onClick?: () => void;
}

export const BaseInput = forwardRef<HTMLInputElement | null, IBaseInput>(
  (
    {
      maxLength,
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
      min,
      disabled,
      autoComplete = "off",
      rightElementClick,
      max,
      onKeyPress,
      isLoading,
      classNameInput,
      onKeyDown,
      onBlur,
      readonly,
      onClick,
    },
    ref
  ) => {
    const { inputRef, handleOnChange, focusInput } = useBaseInput({
      ref,
      onChange,
      onFocus,
      register,
    });

    return (
      <div className={`w-full stack gap-y-[0.68rem]  ${wrapperClassName}`}>
        {label && (
          <label
            className={cn(
              `!text-body-md md:!text-body-lg font-medium text-dark-blue-shade1 self-start`,
              disabled && "opacity-[.3]"
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
          className={`${styles.BaseInput}  group/base-input ${className} relative border border-gray-shade11 focus-within:border-primary flex items-center gap-x-[0.62rem] px-[1.25rem] sm:py-3 lg:py-[0.87rem] rounded-[0.625rem] [&:has(input:auto-fill)]:bg-blue-shade6  ${classNameInput}`}
          onClick={disabled ? undefined : focusInput}
          data-error={!!error}
        >
          {readonly && (
            <div
              onClick={onClick}
              className={`absolute top-0 left-0 ${
                readonly && "!cursor-pointer"
              } w-full h-full`}
            />
          )}
          {leftIcon}
          <input
            ref={inputRef}
            id={label}
            type={type}
            value={value}
            onChange={handleOnChange}
            placeholder={placeholder}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            className={cn(
              `outline-none w-full !text-body-md md:!text-body-lg placeholder-gray-shade7 text-dark-blue-shade2 bg-transparent flex-grow`,
              disabled && "opacity-[.3]"
            )}
            min={min}
            max={max}
            maxLength={maxLength}
            disabled={disabled || readonly}
            autoComplete={autoComplete}
            onBlur={onBlur}
            {...register}
          />
          {isLoading ? (
            <Spinner />
          ) : (
            <span onClick={rightElementClick} className="cursor-pointer">
              {rightIcon}
            </span>
          )}{" "}
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

BaseInput.displayName = "BaseInput";
