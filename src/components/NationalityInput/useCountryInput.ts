import { useLocale } from "@/utilities/hooks/useLocale";
import { getCountriesAsync } from "@/utilities/utils/getCountriesAsync";
import { CountryType } from "@/utilities/utils/types";
import { useEffect, useState } from "react";

interface IUseCountryInput {
  gender?: "male" | "female";
  nationality?: boolean;
  value?: string;
}

export function useCountryInput({
  gender = "male",
  nationality,
  value,
}: IUseCountryInput) {
  const { locale } = useLocale();
  const [countries, setCountries] = useState<Record<string, CountryType>>({});
  const [country, setCountry] = useState<CountryType>();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const fetchedCountries = await getCountriesAsync(locale);
        setCountries(fetchedCountries ?? {});
      } catch {
        setCountries({});
      }
    };

    fetchCountries();
  }, [locale]);

  useEffect(() => {
    if (value && !country) {
      const country = countries?.[value?.toLowerCase()];

      if (country) {
        setCountry({
          ...country,
          name: nationality ? country?.nationality?.[gender] : country?.name,
        });
      }
    }
  }, [value, countries]);

  const mappedCountries = Object.values(countries);

  return {
    countries: nationality
      ? mappedCountries.map((country) => {
          try {
            const nationality = country.nationality[gender];

            return {
              ...country,
              name: nationality,
            };
          } catch {
            return country;
          }
        })
      : mappedCountries,

    country,
    setCountry,
  };
}
