import { useState } from "react";
import { ISelectInput, SelectInput } from "../../SelectInput/SelectInput";
import { cn } from "@/styles/utils";
import { isEmpty } from "lodash";
import { useComponentsDictionary } from "locales/t/components";
import { SelectMultiOptionsOption } from "./SelectMultiOptionsOption";

interface ISelectMultiOptions
  extends Omit<ISelectInput, "onChange" | "value" | "onChangeOption"> {
  selectedOptions?: string[] | ISelectInput["options"];
  onChange?: (value: string[]) => void;
  onChangeOption?: (value: string) => void;
  onChangeOptions?: (values: ISelectInput["options"]) => void;
  className?: string;
  useApply?: boolean;
}

export function SelectMultiOptions({
  onChange,
  selectedOptions = [],
  label,
  placeholder,
  onChangeOptions,
  clearBtn,
  className,
  useApply,
  ...selectInputProps
}: ISelectMultiOptions) {
  const translate = useComponentsDictionary();
  const options = (selectedOptions as any)?.[0]?.id
    ? (selectedOptions as ISelectInput["options"])
    : selectInputProps?.options?.filter((item) =>
        (selectedOptions as string[])?.includes(item?.id)
      );

  const [values, setValues] = useState<ISelectInput["options"]>(options);

  const handleSelect = (
    props?: { id: string; name: string } & Record<string, string>
  ) => {
    if (props) {
      const newValues = [...(values ?? []), props];
      setValues(newValues);
      if (!useApply) onChangeOptions?.(newValues);
    }
  };

  const handleUnselect = (
    props?: { id: string; name: string } & Record<string, string>
  ) => {
    if (props) {
      const newValues = (values ?? [])?.filter((item) => item.id !== props?.id);
      setValues(newValues);

      onChangeOptions?.(newValues);
    }
  };

  const onClear = () => {
    onChangeOptions?.([]);
    setValues([]);
  };

  const handlerApply = () => {
    onChangeOptions?.(values);
  };

  return (
    <SelectInput
      className={cn(
        "!bg-white",
        !isEmpty(values)
          ? "[&_*]:!placeholder-dark-blue-shade2 [&_*]:!text-dark-blue-shade2"
          : undefined,
        className
      )}
      placeholder={placeholder}
      {...selectInputProps}
      onChange={onClear}
      options={values}
      fixed
      clearBtn={clearBtn}
      onChangeOption={() => {}}
      renderOption={(option) => (
        <SelectMultiOptionsOption
          onClick={() => handleUnselect(option)}
          {...option}
        />
      )}
      externalControls={
        useApply ? (
          <button
            type="button"
            onClick={handlerApply}
            className="ml-auto button-primary"
          >
            {translate("SelectMultiOptions.apply")}
          </button>
        ) : undefined
      }
      selectInputContentHeader={
        <div className="p-2 pb-0">
          <SelectInput
            {...selectInputProps}
            searchable
            cleanOnSelect
            onChangeOption={handleSelect}
            optionsToFilter={values}
          />
        </div>
      }
    />
  );
}
