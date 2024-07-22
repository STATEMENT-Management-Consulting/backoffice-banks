import { useEffect, useState } from "react";

export const DefaultDebounceTimeout = 500;

export function useDebounce(timeout = 500) {
  const [value, setValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  const changeValue = (text: string) => setValue(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [value, timeout]);

  return {
    debouncedValue,
    value,
    changeValue,
  };
}
