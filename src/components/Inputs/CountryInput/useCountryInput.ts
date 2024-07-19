import {
  CountryType,
  useApiGetAllCountries,
} from "./hooks/useApiGetAllCountries";
import { useState } from "react";
import { sortBy } from "lodash";
import { useOpen } from "@/utilities/hooks/useOpen";

interface IUseCountryInput {
  onChange?: (name: string) => void;
  onChangeCountry?: (country: CountryType) => void;
  value?: string;
}

export function useCountryInput({
  onChange,
  value = "",
  onChangeCountry,
}: IUseCountryInput) {
  const { isOpen, onOpen: open, onClose: close } = useOpen();
  const [country, setCountry] = useState<string>(value);

  const { countries, isGettingCountries } = useApiGetAllCountries();

  const [selectedCountry, setSelectedCountry] = useState<
    CountryType | undefined
  >(countries?.find((c) => c?.name?.common === value));

  const handleOnChange = (query: string = "") => {
    setCountry(query ?? "");
  };

  const onSelectCountry = (country: CountryType) => {
    handleOnChange(country?.name?.common);
    onChange?.(country?.name?.common ?? "");
    onChangeCountry?.(country);
    setSelectedCountry(country);
    close();
  };

  const sortedCountries = sortBy(
    countries,
    (country) => country?.name?.common,
    "asc"
  );

  return {
    handleOnChange,
    countries: sortedCountries?.filter((c) =>
      c?.name.common?.toLowerCase().includes(country?.toLowerCase())
    ),
    isGettingCountries,
    onSelectCountry,
    isOpen,
    open,
    close,
    country,
    setCountry,
    selectedCountry,
  };
}
