import { SelectInputItem } from "./SelectInputItem";
import { Fragment, RefObject } from "react";
import { Spinner } from "../../Spinner/Spinner";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { cn } from "@/styles/utils";
import { useComponentsDictionary } from "locales/t/components";

interface ISelectInputContent {
  close: () => void;
  options: Array<{ name: string; id: string }>;
  currentOption?: string;
  containerRef: RefObject<HTMLDivElement>;
  onChange?: (props?: { name: string; id: string }) => void;
  searchable?: boolean;
  isLoading?: boolean;
  floatOptions?: boolean;
  className?: string;
  fixed?: boolean;
  placement?: "top" | "bottom";
  emptyDropdown?: JSX.Element;
  search: string;
  cleanOnSelect?: boolean;
  clearBtn?: boolean;
  addLabel?: string;
  onAdd?: () => void;
  toAdd?: boolean;
  selectInputContentHeader?: JSX.Element;
  externalControls?: JSX.Element;
  renderOption?: (
    props: { id: string; name: string } & Record<string, string>,
    onChangeOption?: ISelectInputContent["onChange"]
  ) => JSX.Element;
}

export function SelectInputContent({
  options,
  close,
  containerRef,
  onChange,
  currentOption,
  searchable,
  isLoading,
  floatOptions = true,
  className,
  fixed,
  placement,
  emptyDropdown,
  search,
  clearBtn,
  externalControls,
  selectInputContentHeader,
  renderOption,
  addLabel,
  onAdd,
  toAdd,
}: ISelectInputContent) {
  const dictionary = useComponentsDictionary();
  useOutsideClick(containerRef, close);

  const paintMatchedOptions = (value: string) => {
    try {
      const dynamicRegex = search ? new RegExp(search, "gi") : "";

      return location
        ? value.replace(dynamicRegex, (match) => {
            return `<b>${match}</b>`;
          })
        : value;
    } catch {
      return value;
    }
  };

  const filteredOptions = !searchable
    ? options
    : options?.filter((option) =>
        option?.name?.toLowerCase().includes(search.toLowerCase())
      );

  const handleOnSelect = (option: { id: string; name: string }) => {
    onChange?.(option);
    if (!fixed) {
      close();
    }
  };

  const handleOnMouseLeave = () => {
    if (fixed) {
      close();
    }
  };

  const onClear = () => {
    onChange?.(undefined);
    close();
  };

  return (
    <div className="relative z-30" onMouseLeave={handleOnMouseLeave}>
      {emptyDropdown}
      <div
        className={cn(
          className,
          !floatOptions ? "static" : "absolute",
          "left-0 right-0 bg-white ti shadow-md  rounded-xl stack gap-2 divide-y divide-border",
          placement === "bottom" ? "top-5" : "bottom-5"
        )}
      >
        {isLoading ? (
          <div className="flex flex-center p-6">
            <Spinner />
          </div>
        ) : (
          <>
            {selectInputContentHeader}
            <div
              className={`max-h-[310px] overflow-y-auto ${
                searchable ? "pt-2" : ""
              }`}
            >
              {filteredOptions?.length
                ? filteredOptions?.map((option) =>
                    renderOption ? (
                      <Fragment key={option.id}>
                        {renderOption(option as any, onChange)}
                      </Fragment>
                    ) : (
                      <SelectInputItem
                        key={option.id}
                        value={option.id}
                        onSelect={() => handleOnSelect(option)}
                        isSelected={option.id === currentOption}
                      >
                        {searchable ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: paintMatchedOptions(option.name),
                            }}
                          />
                        ) : (
                          option.name
                        )}
                      </SelectInputItem>
                    )
                  )
                : !emptyDropdown && (
                    <div className="flex justify-center p-2">
                      {dictionary?.(
                        searchable && !!search
                          ? "SelectInput.not-found"
                          : "SelectInput.empty"
                      )}
                    </div>
                  )}

              {emptyDropdown}
            </div>
            {clearBtn ? (
              <div className="flex justify-end w-full p-2">
                <button
                  type="button"
                  className="button-primary button-text"
                  onClick={onClear}
                >
                  {dictionary("SelectInput.clear")}
                </button>
                {externalControls}
              </div>
            ) : toAdd ? (
              <div className="flex justify-end w-full p-2">
                <button
                  type="button"
                  className="button-primary button-text"
                  onClick={onAdd}
                >
                  {dictionary(`SelectInput.add.${addLabel as string}` as any)}
                </button>
                {externalControls}
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
