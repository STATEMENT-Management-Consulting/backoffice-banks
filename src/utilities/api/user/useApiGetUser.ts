import { useQuery } from "@tanstack/react-query";
import { cacheUserSession } from "@/utilities/session/cacheUserSession";
import { AppKeys } from "@/utilities/appKeys";
import { getSavedCookie } from "@/utilities/session/cookieUtils";
import { authedApi } from "@/api/mirantes/authApi";
import { UserType } from "@/@types/user.types";

const getUser = async () => {
  const meResponse = await authedApi.get<{
    account: UserType;
  }>("/users/me");
  const account = meResponse.data.account;

  cacheUserSession({ user: account });

  return account;
};

export const useApiGetUser = () => {
  const {
    data: user,
    isLoading: isGettingUser,
    isSuccess,
  } = useQuery({
    queryKey: ["user/account"],
    queryFn: getUser,
  });

  return { user, isGettingUser, isSuccess };
};

export const getCurrentUser = () => {
  try {
    const user = JSON.parse(getSavedCookie(AppKeys.userData) ?? "{}");
    return user as UserType;
  } catch {
    return {} as UserType;
  }
};
