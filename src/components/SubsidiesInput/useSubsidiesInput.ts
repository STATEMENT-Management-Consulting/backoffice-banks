import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubsidiesSchema, TSubsidiesSchema } from "./schema";
import { useComponentsDictionary } from "locales/t/components";
import { useApiLoadSubsidies } from "./api/useApiLoadSubsidies";
import { ISubsideApiResponse } from "./types";
import { useApiAddSubsidies } from "./api/useApiAddSubsidies";
import { useToast } from "../Toasts/Toast";

export function useSubsidiesInput({ onClose }: { onClose: () => void }) {
  const { subsidies } = useApiLoadSubsidies();
  const { errorToast } = useToast();
  const { addASubside, isAddingSubside } = useApiAddSubsidies();

  const t = useComponentsDictionary();
  const {
    setError,
    setValue,
    handleSubmit,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<TSubsidiesSchema>({
    resolver: yupResolver(SubsidiesSchema),
  });

  const subsidiesOptions = subsidies?.map((subside: ISubsideApiResponse) => ({
    id: subside?.id,
    name: subside?.name,
  }));

  const getErrorCountry = (): string => {
    if (!watch("country")?.length) {
      setError("country", { message: t("SubsidiesInput.errors.no-country") });
    }
    clearErrors("country");
    return "";
  };

  const getErrorSubsideName = (): string => {
    if (!watch("name")?.length) {
      setError("country", { message: t("SubsidiesInput.errors.no-name") });
    }
    clearErrors("name");
    return "";
  };

  const onSubmit = handleSubmit((data) => {
    addASubside(
      {
        country: data?.country as string,
        name: data?.name as string,
      },
      {
        onError(error) {
          errorToast({
            title: t("SubsidiesInput.errors.actions.add"),
          });
        },
        onSuccess() {
          onClose();
        },
      }
    );
  });

  return {
    subsidiesOptions,
    getErrorSubsideName,
    getErrorCountry,
    errors,
    setValue,
    onSubmit,
    watch,
    isAddingSubside,
  };
}
