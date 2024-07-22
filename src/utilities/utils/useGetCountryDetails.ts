import { useEffect, useState } from "react";
import { getCountriesAsync } from "./getCountriesAsync";
import { CountryType } from "./types";
import { useLocale } from "../hooks/useLocale";

export function useGetCountryDetails() {
  const { locale } = useLocale();
  const [countries, setCountries] = useState<Record<string, CountryType>>({});

  const getCountryDetails = (countryCode: string) => {
    if (!countries) return undefined;
    const country = countries?.[countryCode];

    return country;
  };

  useEffect(() => {
    async function loadCountries() {
      const countries = await getCountriesAsync(locale);
      if (countries) {
        setCountries(countries);
      }
    }

    loadCountries();
  }, [locale]);

  return {
    getCountryDetails,
  };
}
