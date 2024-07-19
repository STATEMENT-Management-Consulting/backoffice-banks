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
import { Spinner } from "../../Spinner/Spinner";
import { cn } from "@/styles/utils";

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
  label?: string | ReactNode;
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
  autoFocus?: boolean;
  blockInput?: boolean;
  readOnly?: boolean;
  title?: string;
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
      onClick,
      blockInput,
      autoFocus,
      readOnly,
      title,
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
        className={`w-full stack gap-y-[0.68rem] ${wrapperClassName}`}
        style={{
          pointerEvents: blockInput ? "none" : undefined,
        }}
      >
        {label && (
          <label
            className={cn(
              `text-body-md font-medium text-dark-blue-shade1 self-start relative`,
              disabled && "opacity-[.3]"
            )}
            htmlFor={disabled ? undefined : (label as any)}
          >
            {label}
            {required && (
              <span className="text-red-shade6 font-bold text-body-xl absolute -right-3">
                {" "}
                *
              </span>
            )}
          </label>
        )}
        <div
          className={`${styles.BaseInput} group/base-input ${className} w-full border border-gray-shade11 justify-between focus-within:border-primary flex items-center px-[1.25rem] sm:py-3 lg:py-[0.87rem] rounded-[0.625rem] [&:has(input:auto-fill)]:bg-blue-shade6  ${classNameInput}`}
          onClick={disabled ? undefined : focusInput}
          data-error={!!error}
        >
          {leftIcon ? <div className="flex-1">{leftIcon}</div> : null}
          <div className="flex-grow sm:w-auto">
            <input
              readOnly={readOnly}
              ref={inputRef}
              id={String(label) as any}
              type={type}
              value={value}
              onChange={handleOnChange}
              placeholder={placeholder}
              onKeyPress={onKeyPress}
              onKeyDown={onKeyDown}
              autoFocus={autoFocus}
              onClick={onClick}
              className={cn(
                `outline-none w-full placeholder-gray-shade7 text-dark-blue-shade2 bg-transparent `,
                disabled && "opacity-[.3]"
              )}
              min={min}
              title={title}
              max={max}
              maxLength={maxLength}
              disabled={disabled}
              autoComplete={autoComplete}
              onBlur={onBlur}
              {...register}
            />
          </div>
          <div className="flex-shrink-0 sm:w-auto">
            {isLoading ? (
              <Spinner className="!w-4 !h-4" />
            ) : (
              <span onClick={rightElementClick} className="cursor-pointer">
                {rightIcon}
              </span>
            )}
          </div>
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
