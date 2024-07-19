/* eslint-disable @next/next/no-img-element */
import { HTMLInputTypeAttribute, useRef } from "react";
import { CountryInputContainer } from "./CountryInputContainer";
import { useCountryInput } from "./useCountryInput";
import { ChevronDown20Icon } from "@/assets/feather-icons/ChevronDown20Icon";
import { CountryType } from "./hooks/useApiGetAllCountries";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { BaseInput } from "../BaseInput/BaseInput";

interface ICountryInput {
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
  onChangeCountry?: (country: CountryType) => void;
  float?: boolean;
}

export function CountryInput({
  onChange,
  error,
  value,
  required,
  label,
  wrapperClassName,
  classNameInput,
  onChangeCountry,
  float,
}: ICountryInput) {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    countries,
    handleOnChange,
    isGettingCountries,
    close,
    isOpen,
    onSelectCountry,
    open,
    country,
    setCountry,
    selectedCountry,
  } = useCountryInput({ onChange, value, onChangeCountry });

  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (value !== country && isOpen) setCountry(value ?? "");
    close();
  });

  return (
    <div ref={ref} className="stack relative">
      <BaseInput
        label={label}
        value={country ?? ""}
        onChange={handleOnChange}
        autoComplete="off"
        placeholder="USA"
        required={required}
        leftElement={
          selectedCountry && (
            <div className="w-10 h-6 rounded-[2px]">
              <img
                src={selectedCountry?.flags?.png ?? selectedCountry?.flags?.svg}
                alt={selectedCountry?.flag}
                className="w-8 h-6 object-cover rounded-[2px]"
              />
            </div>
          )
        }
        rightElement={
          <div
            className={`transition-transform ${
              isOpen ? "-rotate-180" : "rotate-0"
            }`}
          >
            {ChevronDown20Icon}
          </div>
        }
        onFocus={open}
        classNameInput={classNameInput}
        wrapperClassName={wrapperClassName}
        isLoading={isGettingCountries}
        error={error}
      />
      {isOpen && (
        <CountryInputContainer
          containerRef={containerRef}
          float={float}
          close={close}
          country={country}
          countries={countries ?? []}
          onSelectCountry={onSelectCountry}
          isGettingCountries={isGettingCountries}
        />
      )}
    </div>
  );
}

CountryInput.displayName = "CountryInput";
