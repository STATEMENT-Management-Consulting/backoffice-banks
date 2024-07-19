import { BaseInput } from "../BaseInput/BaseInput";
import { Modal } from "../../Modal/Modal";
import { useLinkInput } from "./utils/useLinkInput";
import { useState } from "react";
import { PlusIcon } from "@/assets/feather-icons/PlusIcon";
import { Button } from "@/components/Button/Button";

type LinksModalProps = {
  onSave: (data: { name: string; url: string }) => void;
};

export function LinkInput({ ...props }: LinksModalProps) {
  const [openLinksModal, setOpenLinksModal] = useState<boolean>(false);
  const handleClose = () => {
    setOpenLinksModal(false);
  };

  const { translate, errors, watch, getError, register, onSubmit } =
    useLinkInput(props.onSave, handleClose);

  const handleTestLink = (url: string) => {
    window.open(url, "popup", "width=1440,height=900");
  };

  return (
    <>
      <BaseInput
        readOnly
        onClick={() => setOpenLinksModal(true)}
        placeholder={translate("attachment-modal.title")}
        label={translate("attachment-modal.title")}
        rightElement={
          <span className="[&>svg_*]:fill-gray-shade16">{PlusIcon}</span>
        }
      />

      <Modal
        centered
        className="w-full max-w-[31.25rem]"
        onClose={handleClose}
        isOpen={openLinksModal}
      >
        <div className="w-full stack gap-y-6">
          <h4 className="text-body-xl lg:text-2xl">
            {translate("links-modal.title")}
          </h4>

          <form className="stack w-full gap-y-6">
            <BaseInput
              label={translate("links-modal.form.title.label")}
              placeholder={translate("links-modal.form.title.label")}
              error={getError(errors.name?.message)}
              required
              register={register("name")}
            />

            <BaseInput
              label={translate("links-modal.form.url.label")}
              placeholder={translate("links-modal.form.url.label")}
              error={getError(errors.url?.message)}
              required
              register={register("url")}
            />

            {!errors?.url?.message && watch("url") && (
              <a
                onClick={() => handleTestLink(watch("url"))}
                href="#"
                className="!underline text-primary"
              >
                {translate("links-modal.form.buttons.test-link")}
              </a>
            )}

            <div className="w-full flex gap-x-5">
              <Button
                onClick={handleClose}
                label={translate("links-modal.form.buttons.cancel")}
                className="text-primary flex-1 button-outline !border-primary"
              />

              <Button
                onClick={onSubmit}
                label={translate("links-modal.form.buttons.save")}
                className="text-white !bg-primary button-outline !border-primary flex-1"
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
