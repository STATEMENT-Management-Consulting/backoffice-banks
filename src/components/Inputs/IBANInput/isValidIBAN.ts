export function isValidIBAN(iban: string): boolean {
  // Remove spaces from the IBAN
  const cleanedIBAN = iban.replace(/\s/g, "");

  // Check if the IBAN has the correct structure and length
  const ibanRegex: RegExp = /^[A-Z]{2}\d{2}[A-Za-z0-9]{4,}$/;
  if (!ibanRegex.test(cleanedIBAN)) {
    return false;
  }

  // Move the first 4 characters to the end
  const rearrangedIBAN: string =
    cleanedIBAN.substring(4) + cleanedIBAN.substring(0, 4);
  // alert(rearrangedIBAN)
  // Convert letters to numbers (A=10, B=11, ..., Z=35)
  const numericIBAN: string = rearrangedIBAN
    .split("")
    .map((char) =>
      isNaN(Number(char))
        ? (char.charCodeAt(0) - "A".charCodeAt(0) + 10).toString()
        : char
    )
    .join("");

  // Perform modulo 97 check
  return parseInt(numericIBAN) % 97 === 1;
}
