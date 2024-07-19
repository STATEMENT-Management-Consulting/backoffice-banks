export function formatIban(input: string) {
  // Remove non-alphanumeric characters
  const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, "");

  // Split the sanitized input into groups of four characters for formatting
  const formatted = sanitizedInput.replace(/(.{4})/g, "$1 ");

  return formatted.trim(); // Remove leading/trailing spaces
}
