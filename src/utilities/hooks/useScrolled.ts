import { useEffect, useState } from "react";

interface UseScrollProps {
  elementId?: string;
  threshold?: number;
}

function useScroll({ elementId, threshold = 0 }: UseScrollProps = {}) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const targetElement = elementId
      ? document.getElementById(elementId)
      : window;

    function handleScroll() {
      const scrollY =
        targetElement === window
          ? window.scrollY || window.pageYOffset
          : (targetElement as { scrollTop: number })?.scrollTop;
      setHasScrolled(scrollY > threshold);
    }

    handleScroll();

    targetElement?.addEventListener("scroll", handleScroll);

    return () => {
      targetElement?.removeEventListener("scroll", handleScroll);
    };
  }, [elementId, threshold]);

  return { hasScrolled };
}

export default useScroll;
