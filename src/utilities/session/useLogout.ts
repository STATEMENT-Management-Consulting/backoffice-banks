import { queryClient, queryCache } from "@/api/cache/reactQuery";
import { clearAllCookies } from "./clearAllCookies";
import { useRouter } from "next/router";
import { authedApi } from "@/api/mirantes/authApi";
import { AuthRoutes } from "../routes";
import { useMutation } from "@tanstack/react-query";

const mutationFn = async () => {
  const { data } = await authedApi.delete("/auth/logout");

  return data;
};

export function useLogout() {
  const { push } = useRouter();
  const language = localStorage.getItem("language") || "en";

  const { mutate: logout, isLoading: isLoginOut } = useMutation({
    mutationFn,
    onSuccess() {
      localStorage.setItem("language", language);
      sessionStorage.clear();
      localStorage.clear();
      clearAllCookies();
      push(AuthRoutes.signIn);
      queryCache.clear();
      queryClient.clear();
    },
  });

  return { logout, isLoginOut };
}
