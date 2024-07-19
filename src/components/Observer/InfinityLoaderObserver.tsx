import { cn } from "@/styles/utils";
import { Spinner } from "../Spinner/Spinner";
import { useInfinityLoaderObserver } from "./useInfinityLoaderObserver";
import { FetchNextPageOptions } from "@tanstack/react-query";

export interface IInfinityLoader {
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<any>;
  hasNextPage?: boolean;
}

function InfinityLoaderObserver({
  fetchNextPage,
  hasNextPage,
  className,
}: IInfinityLoader & { className?: string }) {
  const observer = useInfinityLoaderObserver({ hasNextPage, fetchNextPage });

  return (
    <div ref={observer} className={cn("flex flex-center", className)}>
      <Spinner />
    </div>
  );
}

export function InfinityLoader({
  hasNextPage,
  fetchNextPage,
  className,
}: IInfinityLoader & { className?: string }) {
  if (!hasNextPage) return null;

  return (
    <InfinityLoaderObserver
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      className={className}
    />
  );
}
