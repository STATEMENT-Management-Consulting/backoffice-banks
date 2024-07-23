import { QueryClient, QueryCache } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const queryCache = new QueryCache();
