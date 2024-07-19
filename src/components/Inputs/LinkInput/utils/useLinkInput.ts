import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LinkInputSchema } from "./helpers";
import { useComponentsDictionary } from "locales/t/components";

export function useLinkInput(
  onSave: (data: { name: string; url: string }) => void,
  onClose: () => void
) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(LinkInputSchema),
  });

  const translate = useComponentsDictionary();

  const getError = (path?: string) => {
    if (path) {
      return translate(`links-modal.form.errors.${path}` as any);
    }
  };

  const changeName = (value: string) => {
    if (errors.name?.message && value) clearErrors("name");
    setValue("name", value);
  };

  const changeURL = (value: string) => {
    if (errors.url?.message && value) clearErrors("url");
    setValue("url", value);
  };

  const onSubmit = handleSubmit((data) => {
    onSave(data);
    onClose();
  });

  return {
    watch,
    register,
    errors,
    changeURL,
    getError,
    translate,
    changeName,
    onSubmit,
  };
}
