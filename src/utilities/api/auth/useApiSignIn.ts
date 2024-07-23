import { authApi } from "@/api/mirantes/authApi";
import { AuthRoutes } from "@/utilities/routes";
import { cacheUserSession } from "@/utilities/session/cacheUserSession";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export type TSignInPayload = {
  email: string;
  password: string;
};

export type TPostSignIn = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  user: {
    id: string;
    email: string;
    phone: string;
    name: string;
    miraId?: string;
  };
};

const postSignIn = async ({ email: login, password }: TSignInPayload) => {
  const response = await authApi.post<TPostSignIn>("/auth/login", {
    login,
    password,
  });

  return response.data;
};

export function useApiSignIn() {
  const { push } = useRouter();
  const { isLoading, mutate: signIn } = useMutation(postSignIn, {
    onSuccess({ tokens, user }) {
      cacheUserSession({ tokens, user });
      push(AuthRoutes.companies);
    },
  });

  return { isLoading, signIn };
}
