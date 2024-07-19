import styles from "../BaseInput/BaseInput.module.css";
import { useOpen } from "@/utilities/hooks/useOpen";
import { KeyboardEventHandler, ReactNode, RefObject, useRef } from "react";
import { Spinner } from "../../Spinner/Spinner";
import { ChevronUpIcon } from "@/assets/feather-icons/ChevronUpIcon";
import { ChevronDownIcon } from "@/assets/feather-icons/ChevronDownIcon";
import { cn } from "@/styles/utils";
import { useComponentsDictionary } from "locales/t/components";

interface ISelectInputTrigger {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: { name: string; id: string };
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  optionsRender: (props: {
    containerRef: RefObject<HTMLDivElement>;
    close: () => void;
  }) => ReactNode;
  error?: string | boolean;
  isLoading?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placement?: "top" | "bottom";
  search: string;
  cleanOnSelect?: boolean;
  onDropDownOpenOrClose?: () => void;
  onSearch: (value: string) => void;
  doNotShowIcon?: boolean;
  wrapperClassName?: string;
}

export default function SelectInputTrigger({
  placeholder,
  value,
  label,
  required,
  className,
  rightIcon,
  leftIcon,
  optionsRender,
  error,
  isLoading,
  disabled,
  onKeyDown,
  placement,
  onSearch,
  doNotShowIcon,
  search,
  searchable,
  onDropDownOpenOrClose,
  wrapperClassName,
}: ISelectInputTrigger) {
  const translate = useComponentsDictionary();
  const { isOpen, onClose: close, onOpen: open } = useOpen();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    onDropDownOpenOrClose?.();
    open();
  };

  const handleClose = () => {
    close();
    onDropDownOpenOrClose?.();
  };

  return (
    <div
      className={cn("stack gap-y-[0.68rem] outline-none", wrapperClassName)}
      aria-label="Select input"
    >
      {label && (
        <label
          className={cn(
            `text-body-md font-medium text-dark-blue-shade1 self-start relative`,
            disabled && "opacity-[.3]"
          )}
          htmlFor={disabled ? undefined : label}
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
      <div ref={containerRef} className="w-full ">
        <div
          className={cn(
            `${styles.BaseInput} group/base-input ${className} border border-gray-shade11 focus-within:border-gray-shade4 flex items-center gap-x-[0.62rem] px-[1.25rem] sm:py-3 lg:py-[0.87rem] rounded-[0.625rem] justify-between`,
            disabled ? "pointer-events-none" : ""
          )}
          onClick={isOpen || disabled ? undefined : handleOpen}
          data-error={!!error}
        >
          {leftIcon}
          <input
            id={label}
            type="text"
            readOnly={!searchable}
            onKeyDown={onKeyDown}
            placeholder={
              placeholder ??
              (searchable && isOpen
                ? translate("SelectInput.search")
                : translate("SelectInput.select"))
            }
            value={searchable ? search : value?.name ?? placeholder}
            onChange={(value: any) => onSearch(value.target.value)}
            className={cn(
              `outline-none w-full bg-transparent text-left cursor-pointer ${
                isOpen ? "cursor-default" : ""
              } `,
              value ? "text-dark-blue-shade2" : "text-gray-shade7",
              disabled ? "!text-gray-shade7" : undefined
            )}
          />
          {isLoading ? (
            <Spinner className="!w-4 !h-4" />
          ) : (
            !doNotShowIcon &&
            (rightIcon ?? (
              <div
                className={`transition-transform sm:w-4 sm:h-4 flex-center lg:w-auto lg:h-auto ${
                  placement == "top"
                    ? isOpen
                      ? "rotate-180"
                      : "rotate-0"
                    : isOpen
                    ? "-rotate-180"
                    : "rotate-0"
                }`}
              >
                {placement == "top" ? ChevronUpIcon : ChevronDownIcon}
              </div>
            ))
          )}
        </div>
        {error && (
          <p className="mt-[0.68rem] text-body-sm font-medium self-start text-red-shade6">
            {error}
          </p>
        )}
        {isOpen ? optionsRender({ containerRef, close: handleClose }) : null}
      </div>
    </div>
  );
}
