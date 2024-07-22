import { useEffect, RefObject } from "react";

export function useOutsideClick<RefType extends HTMLElement>(
  ref: RefObject<RefType> | null,
  callback: (event?: MouseEvent) => void
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref) return callback(event);

      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}
