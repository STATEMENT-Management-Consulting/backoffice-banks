import { useEffect } from "react";

export function useClickOutsideState(callback: () => void, isActive: boolean) {
  useEffect(() => {
    if (isActive) {
      const handleClick = (event: MouseEvent) => {
        callback();
      };
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  }, [callback, isActive]);
}
