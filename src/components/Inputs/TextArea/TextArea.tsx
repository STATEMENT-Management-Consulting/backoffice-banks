import { cn } from "@/styles/utils";
import styles from "./TextArea.module.css";

import {
  FocusEventHandler,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ReactNode,
  forwardRef,
} from "react";

import { UseFormRegisterReturn } from "react-hook-form";
import { Spinner } from "../../Spinner/Spinner";
import { useBaseInput } from "../BaseInput/useBaseInput";

export interface ITextArea {
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  rightIcon?: ReactNode;
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
  onClick?: () => void;
  readOnly?: boolean;
}

export const TextArea = forwardRef<HTMLInputElement | null, ITextArea>(
  (
    {
      maxLength,
      onChange,
      leftElement: leftIcon,
      rightElement,
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
      isLoading,
      classNameInput,
      onKeyDown,
      onBlur,
      rightIcon,
      readOnly,
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
      <div
        onClick={onClick}
        className={`w-full stack gap-y-[0.68rem] ${wrapperClassName}`}
      >
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
          className={`${
            styles.BaseInput
          } group/base-input ${className} border border-gray-shade11 focus-within:border-primary flex items-center gap-x-[0.62rem] px-[1.25rem] sm:py-3 lg:py-[0.87rem] rounded-[0.625rem] [&:has(input:auto-fill)]:bg-blue-shade6 ${
            onClick ? "cursor-pointer" : ""
          }  ${classNameInput}`}
          onClick={disabled ? undefined : onClick || focusInput}
          data-error={!!error}
        >
          {leftIcon}
          <textarea
            ref={inputRef as any}
            id={label}
            value={value}
            readOnly={readOnly}
            onChange={handleOnChange as any}
            placeholder={placeholder}
            onKeyDown={onKeyDown as any}
            className={cn(
              `outline-none overflow-y-hidden w-full !text-body-md md:!text-body-lg placeholder-gray-shade7 text-dark-blue-shade2 bg-transparent flex-grow`,
              disabled && "opacity-[.3]"
            )}
            min={min}
            max={max}
            maxLength={maxLength}
            disabled={disabled}
            autoComplete={autoComplete}
            onBlur={onBlur as any}
            onClick={onClick}
            {...register}
          />
          {isLoading ? (
            <Spinner />
          ) : rightElement ? (
            <span onClick={rightElementClick} className="cursor-pointer">
              {rightElement}
            </span>
          ) : (
            rightIcon ?? null
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

TextArea.displayName = "TextArea";
