import { CountryType } from "./types";

interface CountryData {
  [key: string]: { [countryCode: string]: CountryType };
}

let countryDataCache: CountryData = {};

async function loadCountryDataAsync(
  locale: string
): Promise<{ [countryCode: string]: CountryType } | undefined> {
  if (countryDataCache[locale]) {
    return countryDataCache[locale];
  }

  try {
    switch (locale) {
      case "en":
      case "es":
      case "pt":
      case "fr":
        const data = await import(`./countries/countries_${locale}.json`);
        countryDataCache[locale] = data;
        return data;
      default:
        throw new Error("Locale not supported");
    }
  } catch (error) {
    return undefined;
  }
}

export async function getCountryDetailSync(
  countryCode: string,
  locale: string
): Promise<CountryType | undefined> {
  const countries = await loadCountryDataAsync(locale);
  if (!countries) {
    return undefined;
  }

  return countries[countryCode];
}
