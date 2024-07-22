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

export const getDynamicDataBySubQuery = <DataType>(subQuery: string) => {
  const queries = queryClient
    .getQueryCache()
    .findAll([subQuery])
    .map((query) => query?.queryKey);

  let cachedData: DataType[] = [];

  if (queries?.length > 0) {
    queries?.forEach((key) => {
      const data = queryClient.getQueryData<DataType>(key);

      cachedData.push(data as DataType);
    });
  }

  return [queries as Array<[]>, cachedData as DataType[]];
};
