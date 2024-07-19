import { useComponentsDictionary } from "locales/t/components";
import { SelectInput } from "../Inputs/SelectInput/SelectInput";
import { useApiLoadSubsidies } from "./api/useApiLoadSubsidies";
import { useSubsidiesInput } from "./useSubsidiesInput";
import { ISubsidiesInputProps } from "./types";
import { Modal } from "../Modal/Modal";
import { useOpen } from "@/utilities/hooks/useOpen";
import { BaseInput } from "../Inputs/BaseInput/BaseInput";
import { CountryInput } from "../Inputs/CountryInput/CountryInput";
import { CheckboxInput } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";
import { useRef } from "react";

export function SubsidiesInput({
  onChange,
  value,
  toRemove,
}: ISubsidiesInputProps) {
  const { isOpen, onClose, onOpen } = useOpen();
  const t = useComponentsDictionary();
  const { isGettingSubsidies } = useApiLoadSubsidies();
  const ref = useRef<HTMLFormElement>(null);

  const {
    subsidiesOptions,
    errors,
    onSubmit,
    setValue,
    getErrorCountry,
    getErrorSubsideName,
    watch,
    isAddingSubside,
  } = useSubsidiesInput({ onClose });

  const handleSubmitForm = () => {
    if (ref.current) {
      ref.current.dispatchEvent(new Event("submit"));
      onSubmit(ref.current as any);
    }
  };

  return (
    <>
      <SelectInput
        isLoading={isGettingSubsidies}
        floatOptions={false}
        addLabel="subside"
        toAdd
        onAdd={onOpen}
        onChangeOption={onChange}
        value={value}
        label={t("SubsidiesInput.labels.main")}
        placeholder={t("SubsidiesInput.labels.main")}
        options={
          toRemove?.length
            ? subsidiesOptions?.filter(
                (subsidy: { id: string; name: string }) =>
                  subsidy?.id !== toRemove
              )
            : subsidiesOptions
        }
      />
      <Modal
        isOpen={isOpen}
        overlayClickable
        onClose={onClose}
        title={t("SelectInput.add.subside")}
        overlayClick={onClose}
        centered
        className="min-w-[30rem]"
        isLoading={isAddingSubside}
      >
        <form ref={ref} className="w-full stack gap-y-4">
          <BaseInput
            onChange={(value) => setValue("name", value)}
            value={watch("name")}
            required
            error={errors?.name ? getErrorSubsideName() : ""}
            placeholder={t("SubsidiesInput.labels.main")}
          />
          <CountryInput
            onChange={(value) => setValue("country", value)}
            value={watch("country")}
            required
            float={false}
            error={errors?.country ? getErrorCountry() : ""}
          />

          <div className="w-full flex items-center gap-x-4 justify-between">
            <Button
              className="border border-primary w-full text-body-md bg-white text-primary font-bold"
              label={t("links-modal.form.buttons.cancel")}
              onClick={onClose}
              disabled={isAddingSubside}
            />
            <Button
              className="button-primary text-body-md font-bold w-full"
              label={t("SelectInput.add.subside")}
              disabled={isAddingSubside}
              onClick={handleSubmitForm}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
