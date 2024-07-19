import { authedApi } from "@/api/mirantes/authApi";
import { objToQuery } from "@/utilities/helpers/objToQuery";
import { useDebounce } from "@/utilities/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";

const queryFn = async (query: string) => {
  const filter = objToQuery({ email: query });

  const response = await authedApi.get<{
    account: Array<{
      avatar: string;
      name: string;
      _id: string;
      id?: string;
      email: string;
    }>;
  }>(`/users${filter}`);

  return (
    response.data?.account?.map((user) => ({
      ...user,
      id: user?._id ?? user?.id,
    })) ?? []
  );
};

export function useApiSearchForUser() {
  const { changeValue, debouncedValue, value } = useDebounce();
  const { data: users, isLoading: isGettingUsers } = useQuery({
    queryFn: () => queryFn(debouncedValue),
    queryKey: ["mirantes-users", debouncedValue],
    enabled: !!debouncedValue,
    cacheTime: 0,
  });

  return {
    users,
    isGettingUsers: isGettingUsers && !!debouncedValue,
    changeValue,
    value,
  };
}
