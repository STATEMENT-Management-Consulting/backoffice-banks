import { useMutation } from "@tanstack/react-query";
import { createSubside } from "../services/createSubsidie";
import { queryClient } from "@/api/cache/reactQuery";

export function useApiAddSubsidies() {
  const { mutate: addASubside, isLoading: isAddingSubside } = useMutation({
    mutationFn: createSubside,
    onMutate: (data) => {
      queryClient.setQueryData(["subsidies"], (oldData: any) => {
        return [...oldData, data];
      });
    },
  });

  return {
    addASubside,
    isAddingSubside,
  };
}
