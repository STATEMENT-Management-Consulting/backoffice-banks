const availableLocales = ["pt", "en", "es", "fr"];

export function getCurrentLocale() {
  try {
    const pathname = window.location.pathname;

    const parts = pathname.split("/");
    const locale = parts[1]; // Assuming the locale is the second part of the path

    if (locale && locale.length === 2 && availableLocales.includes(locale)) {
      return locale;
    }

    const browserLocale =
      navigator.language || (navigator as any)?.userLanguage || "";
    return browserLocale.substr(0, 2); // Return th
  } catch {
    return "en";
  }
}
