import { HTMLInputTypeAttribute } from "react";
import { Currencies } from "./utils";
import { sortBy } from "lodash";
import { SelectInput } from "../SelectInput/SelectInput";
import { cn } from "@/styles/utils";
import { useCountryDictionary } from "locales/t/country";

interface ICurrencyInput {
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  className?: string;
  wrapperClassName?: string;
  value?: string;
  required?: boolean;
  label?: string;
  jobLocation?: string;
  error?: string;
  classNameInput?: string;
  placeholder?: string;
  disabled?: boolean;
  initialSearch?: string;
}

export function CurrencyInput(props: ICurrencyInput) {
  const { translate } = useCountryDictionary();
  const options = sortBy(Currencies, (country) => country.id).map(({ id }) => ({
    id,
    name: `(${id}) ${translate(`Currencies.${id}.name` as any)}`,
  }));

  return (
    <SelectInput
      {...props}
      searchable
      options={options}
      className={cn(
        props?.className,
        props?.disabled ? "[&_*]:!text-text-light" : ""
      )}
    />
  );
}

CurrencyInput.displayName = "CurrencyInput";
