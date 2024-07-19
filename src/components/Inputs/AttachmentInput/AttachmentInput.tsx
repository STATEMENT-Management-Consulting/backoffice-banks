import { useState } from "react";
import { BaseInput } from "../BaseInput/BaseInput";
import { Modal } from "../../Modal/Modal";
import { useAddAttachmentInput } from "./utils/useAddAttachmentInput";
import { PdfUploadFileInput } from "../PdfUploadFileInput/PdfUploadFileInput";
import { Button } from "@/components/Button/Button";
import { UploadIcon } from "@/assets/feather-icons/UploadIcon";

type LinksModalProps = {
  error?: string;
  maxSizeLabel?: string;
  onSave: (data: { name: string; attachment: File }) => void;
};

export function AttachmentInput({
  maxSizeLabel = "5MB",
  ...props
}: LinksModalProps) {
  const [openAttachmentsModal, setOpenAttachmentsModal] =
    useState<boolean>(false);

  const handleClose = () => {
    setOpenAttachmentsModal(false);
  };

  const [append, setAppend] = useState<File | null>(null);
  const { onSubmit, register, errors, getError, translate } =
    useAddAttachmentInput(props.onSave, handleClose, append as File);

  return (
    <>
      <BaseInput
        readOnly
        onClick={() => setOpenAttachmentsModal(true)}
        placeholder={translate("links-modal.title")}
        label={translate("links-modal.title")}
        rightElement={
          <span className="[&>svg_*]:fill-gray-shade16">{UploadIcon}</span>
        }
        className="!cursor-pointer [&_*]:cursor-pointer"
        error={props.error}
      />
      {maxSizeLabel && (
        <p className="text-body-sm font-medium self-start text-gray-shade8">
          {translate("PdfUploadFileInput.max-size-label", {
            maxSize: maxSizeLabel,
          })}
        </p>
      )}
      <PdfUploadFileInput
        isDisabled
        onClick={() => setOpenAttachmentsModal(true)}
        className="pt-1"
        label={translate("links-modal.title")}
        placeholder={translate("links-modal.form.url.label")}
        file={null}
        setFile={() => {}}
        maxSizeLabel="5MB"
        error={props.error}
      />

      <Modal
        centered
        className="w-full max-w-[31.25rem]"
        onClose={handleClose}
        isOpen={openAttachmentsModal}
      >
        <div className="w-full stack gap-y-6">
          <h4 className="text-body-xl lg:text-2xl">
            {translate("attachment-modal.title")}
          </h4>

          <form className="stack w-full gap-y-6">
            <BaseInput
              label={translate("attachment-modal.form.title.label")}
              placeholder={translate("attachment-modal.form.title.label")}
              error={getError(errors.name?.message)}
              required
              register={register("name")}
            />

            <PdfUploadFileInput
              placeholder={translate("attachment-modal.form.attachment.label")}
              file={append}
              setFile={setAppend}
              maxSizeLabel="5MB"
              error={getError(errors?.attachment?.message)}
            />

            <div className="w-full flex gap-x-5">
              <Button
                onClick={handleClose}
                label={translate("attachment-modal.form.buttons.cancel")}
                className="text-primary flex-1 button-outline !border-primary"
              />

              <Button
                onClick={onSubmit}
                label={translate("attachment-modal.form.buttons.save")}
                className="text-white !bg-primary button-outline !border-primary flex-1"
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
