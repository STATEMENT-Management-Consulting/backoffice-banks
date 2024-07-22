import { useRouter } from "next/router";

export const useRouteQuery = <T extends Record<string, string>>() => {
  return useRouter().query as T;
};

export const useParams = useRouteQuery;
