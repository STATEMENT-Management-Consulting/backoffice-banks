import { useCallback, useEffect, useRef } from "react";

type UseInfinityLoaderObserver = {
  fetchNextPage: () => Promise<any>;
  hasNextPage?: boolean;
};

export const useInfinityLoaderObserver = ({
  fetchNextPage,
  hasNextPage,
}: UseInfinityLoaderObserver) => {
  const observerElem = useRef(null);

  const handleObserver = useCallback(
    async (entries: any) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        await fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current as any;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    if (element) {
      observer.observe(element);
      return () => observer.unobserve(element);
    }
  }, [handleObserver]);

  return observerElem;
};
