import { queryClient } from "@/api/cache/reactQuery";
import { authApi } from "@/api/mirantes/authApi";
import { useApiGetUser } from "@/views/auth/AuthVerify/api/useApiGetUser";
import { useMutation } from "@tanstack/react-query";

type Props = {
  userId?: string;
  data: { tutorialsSeen: string[] };
};

const mutationFn = async ({ data, userId }: Props) => {
  const response = await authApi.patch(`/pe/users/${userId}`, {
    ...data,
  });

  return response.data;
};

export function useApiStoreTutorial() {
  const { user, isGettingUser } = useApiGetUser();

  const { mutate: storeTutorial, isLoading } = useMutation({
    mutationFn: (data) => mutationFn({ data, userId: user?.id }),
    onMutate: (userData: any) => {
      queryClient.setQueryData(["user/account"], (data: any) => ({
        ...data,
        tutorialsSeen: userData?.tutorialsSeen ?? [],
      }));
    },
  });

  return { storeTutorial, isStoringTutorial: isGettingUser || isLoading };
}
