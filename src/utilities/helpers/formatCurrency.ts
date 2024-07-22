type TCurrency = "AOA" | "USD" | "EURO" | string;

export function formatCurrency(value: number, currency?: TCurrency) {
  try {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currencyDisplay: "code",
      currency: currency,
    }).format(value);
  } catch {
    return "0,00";
  }
}

export const joinCurrencies = (
  values: Array<number | undefined>,
  currency: TCurrency = "AOA",
  separator?: " - "
) => {
  const formatted = values.reduce(
    (acc, value) =>
      value ? [acc, `${formatCurrency(value, currency)}`].join(separator) : acc,
    ""
  );

  return formatted.replace(/^./, "");
};

export const formatCurrencyForInput = (input: string): string => {
  const numericValue = input.replace(/[^0-9]/g, "");
  try {
    if (isNaN(Number(numericValue))) {
      return "0,00";
    }
  } catch {}

  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(parseFloat(numericValue) / 100);

  return formattedValue
    ?.replace(/\,/g, "*")
    .replace(/\./g, ",")
    .replace(/\*/g, ".");
};

export const convertCurrencyFormatToNumber = (value: string): number => {
  return Number(value.replace(/\./g, "").replace(",", "."));
};
