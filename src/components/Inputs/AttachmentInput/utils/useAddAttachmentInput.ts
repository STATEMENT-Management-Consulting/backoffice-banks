import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AttachmentInputSchema } from "./helpers";
import { useEffect } from "react";
import { useComponentsDictionary } from "locales/t/components";

export function useAddAttachmentInput(
  onSave: (data: { name: string; attachment: File }) => void,
  onClose: () => void,
  append: File
) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({
    resolver: yupResolver(AttachmentInputSchema),
  });

  const translate = useComponentsDictionary();

  const getError = (path?: string) => {
    if (path) {
      return translate(`attachment-modal.form.errors.${path}` as any);
    }
  };

  const changeName = (value: string) => {
    if (errors.name?.message && value) clearErrors("name");
    setValue("name", value);
  };

  useEffect(() => {
    setValue("attachment", append?.name);
  }, [append]);

  const onSubmit = handleSubmit((data) => {
    onSave({ name: data?.name, attachment: append as File });
    onClose();
  });

  return {
    watch,
    register,
    errors,

    getError,
    translate,
    changeName,
    onSubmit,
  };
}
