import { HTMLInputTypeAttribute } from "react";
import { NationalityItem } from "./NationalityItem";
import { cn } from "../../styles/utils";
import { ISelectInput, SelectInput } from "../Inputs/SelectInput/SelectInput";
import { useCountryInput } from "./useCountryInput";
import { CountryType } from "@/utilities/utils/types";

interface INationalityInput extends ISelectInput {
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  className?: string;
  wrapperClassName?: string;
  value?: string;
  required?: boolean;
  label?: string;
  jobLocation?: string;
  error?: string;
  onChangeCountry?: (country: CountryType) => void;
  floatOptions?: boolean;
  nationality?: boolean;
  gender?: "male" | "female";
}

export default function NationalityInput({
  onChange,
  error,
  value,
  required,
  label,
  wrapperClassName,
  className,
  onChangeCountry,
  floatOptions,
  nationality,
  gender,
  ...props
}: INationalityInput) {
  const { countries, country, setCountry } = useCountryInput({
    nationality,
    gender,
    value,
  });

  const handleChangeOption = (country: CountryType) => {
    setCountry(country);
    onChangeCountry?.(country);
    onChange?.(country?.id);
  };

  return (
    <SelectInput
      leftIcon={
        country && (
          <div className="w-10 h-6 rounded-[2px]">
            <img
              src={country?.flag.url ?? ""}
              alt={country?.flag.url}
              className="w-8 h-6 object-cover rounded-[2px]"
            />
          </div>
        )
      }
      label={label}
      value={country?.id ?? ""}
      initialSearch={country?.name ?? ""}
      error={error}
      clearBtn
      required={required}
      floatOptions={floatOptions}
      wrapperClassName={cn(
        wrapperClassName,
        "[&_.select-container]:!max-h-[310px] [&_.select-container]:!overflow-y-auto"
      )}
      className={className}
      onChangeOption={(country) =>
        handleChangeOption(country as unknown as CountryType)
      }
      searchable
      renderOption={(country, onSelect, isSelected) => (
        <NationalityItem
          key={country.id}
          onSelect={() => onSelect?.(country)}
          country={country as unknown as CountryType}
          isSelected={isSelected}
        />
      )}
      {...props}
      options={countries}
    />
  );
}

NationalityInput.displayName = "NationalityInput";
