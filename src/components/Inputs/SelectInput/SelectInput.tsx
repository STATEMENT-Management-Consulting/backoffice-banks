import { KeyboardEventHandler, ReactNode, RefObject, useState } from "react";
import SelectInputTrigger from "./SelectInputTrigger";
import { SelectInputContent } from "./SelectInputContent";
import { ChevronDownIcon } from "@/assets/feather-icons/ChevronDownIcon";

export interface ISelectInput {
  onChange?: (id: string) => void;
  onChangeOption?: (
    props: { id: string; name: string } & Record<string, string>
  ) => void;
  renderOption?: (
    props: { id: string; name: string } & Record<string, string>,
    onChangeOption?: ISelectInput["onChangeOption"],
    isSelected?: boolean
  ) => JSX.Element;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  label?: string;
  value?: string;
  options?: Array<{ id: string; name: string }>;
  error?: string | boolean;
  searchable?: boolean;
  isLoading?: boolean;
  floatOptions?: boolean;
  dictionary?: (path: string) => string;
  itemClassName?: string;
  fixed?: boolean;
  optionsToFilter?: Array<{ id: string; name: string } | string>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  placement?: "top" | "bottom";
  disabled?: boolean;
  keepOnSelect?: boolean;
  emptyDropdown?: JSX.Element;
  cleanOnSelect?: boolean;
  clearBtn?: boolean;
  onDropDownOpenOrClose?: () => void;
  selectInputContentHeader?: JSX.Element;
  onSearchOption?: (value: string) => void;
  searchValue?: string;
  doNotShowIcon?: boolean;
  externalControls?: JSX.Element;
  initialSearch?: string;
  onAdd?: () => void;
  addLabel?: string;
  toAdd?: boolean;
}

export function SelectInput({
  placeholder,
  value,
  options: baseOptions = [],
  label,
  required,
  rightIcon,
  leftIcon,
  className,
  onChange,
  error,
  addLabel,
  onAdd,
  toAdd,
  onSearchOption,
  searchValue,
  searchable,
  isLoading,
  onChangeOption,
  floatOptions,
  itemClassName,
  optionsToFilter,
  fixed,
  onKeyDown,
  disabled,
  clearBtn,
  placement = "bottom",
  emptyDropdown,
  cleanOnSelect,
  doNotShowIcon,
  onDropDownOpenOrClose,
  selectInputContentHeader,
  wrapperClassName,
  externalControls,
  renderOption,
  initialSearch = "",
}: ISelectInput) {
  const [search, onSearch] = useState<string>(initialSearch);
  const currentOption = baseOptions?.find((option) => option?.id === value);

  const wasSelected = (id: string) =>
    !!optionsToFilter?.filter((item) =>
      typeof item === "string" ? item === id : item.id === id
    )?.[0];

  const options = !searchable
    ? baseOptions
    : baseOptions?.filter((item) => !wasSelected(item.id));
  const showDropdownOptions = !(searchable && !search && !options?.length
    ? false
    : true);

  const handleOnChange = (
    props?: {
      id: string;
      name: string;
    } & Record<string, string>
  ) => {
    if (!cleanOnSelect) onSearch(props?.name ?? "");
    else onSearch("");

    onChange?.(props?.id ?? "");
    onChangeOption?.(
      props as {
        id: string;
        name: string;
      } & Record<string, string>
    );
  };

  return (
    <>
      <SelectInputTrigger
        label={label}
        wrapperClassName={wrapperClassName}
        doNotShowIcon={doNotShowIcon}
        onDropDownOpenOrClose={onDropDownOpenOrClose}
        search={searchValue ?? search}
        onSearch={onSearchOption ?? onSearch}
        placeholder={placeholder}
        value={currentOption}
        cleanOnSelect={cleanOnSelect}
        required={required}
        leftIcon={leftIcon}
        rightIcon={rightIcon ?? (!showDropdownOptions ? null : ChevronDownIcon)}
        className={className}
        isLoading={isLoading}
        error={error}
        placement={placement}
        onKeyDown={onKeyDown}
        disabled={disabled}
        searchable={searchable}
        optionsRender={({ containerRef, close }) =>
          !(searchable && !search && !options?.length ? false : true) ? null : (
            <SelectInputContent
              cleanOnSelect={cleanOnSelect}
              search={searchValue ?? search}
              selectInputContentHeader={selectInputContentHeader}
              containerRef={containerRef}
              options={options}
              close={close}
              renderOption={renderOption}
              className={itemClassName}
              isLoading={isLoading}
              currentOption={value}
              onChange={handleOnChange}
              searchable={searchable}
              fixed={fixed}
              floatOptions={floatOptions}
              placement={placement}
              clearBtn={clearBtn}
              addLabel={addLabel}
              onAdd={onAdd}
              toAdd={toAdd}
              externalControls={externalControls}
              emptyDropdown={options?.length > 0 ? undefined : emptyDropdown}
            />
          )
        }
      />
    </>
  );
}
