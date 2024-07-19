import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://restcountries.com/v3.1/all";

export type CountryType = {
  name: {
    common: string;
    official?: string;
    native?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  cca2: string; // Country Code
  cca3?: string; // Three-letter Country Code
  ccn3?: string; // Numeric Country Code
  region?: string;
  subregion?: string;
  translations?: Record<string, string>;
  population?: number;
  demonym?: string;
  area?: number;
  gini?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  flag?: string;
  flags?: {
    png?: string;
    svg?: string;
  };
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: Record<string, string>;
};

export const fetchCountries = async () => {
  const response = await axios.get(API_URL);

  return response.data as CountryType[];
};

export function useApiGetAllCountries() {
  const { data: countries, isLoading: isGettingCountries } = useQuery({
    queryFn: fetchCountries,
    queryKey: ["countries"],
  });

  return { countries, isGettingCountries };
}
