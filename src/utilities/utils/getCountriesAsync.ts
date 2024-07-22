import { CountryType } from "./types";

export async function getCountriesAsync(
  locale: string
): Promise<Record<string, CountryType> | undefined> {
  try {
    const countries = await import(`./countries/countries_${locale}.json`);

    if (!countries) {
      return Promise.reject(undefined);
    }

    return Promise.resolve(countries);
  } catch (error) {
    return Promise.reject(undefined);
  }
}
