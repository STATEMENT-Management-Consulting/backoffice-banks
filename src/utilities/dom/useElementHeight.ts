import { useEffect, useRef, useState } from "react";

type UseElementHeightReturnType = [number, React.MutableRefObject<any>];

export const useElementHeight = (
  defaultHeight: number
): UseElementHeightReturnType => {
  const [height, setHeight] = useState<number>(defaultHeight);
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const observeHeight = () => {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          const newHeight = entry.contentRect.height;
          setHeight(newHeight);
        }
      });

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        observer.disconnect();
      };
    };

    observeHeight();
  }, []);

  return [height, elementRef];
};
