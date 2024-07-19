import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { useComponentsDictionary } from "locales/t/components";

type IProps = {
  onClose: () => void;
  title: string;
  label: string;
  className?: string;
  isLoading?: boolean;
  onConfirm: () => void;
};

export function ConfirmModal({ ...props }: IProps) {
  const translate = useComponentsDictionary();

  return (
    <Modal
      isOpen
      centered
      className={`${props?.className}`}
      isLoading={props.isLoading}
    >
      <div className="stack gap-y-6">
        <h4>{props.title}</h4>

        <p className="text-body-lg text-gray-shade7f">{props.label}</p>
        <div className="flex w-full gap-x-5">
          <Button
            onClick={props.onClose}
            label={translate("confirm-modal.options.no")}
            className="border-primary border-2 flex-1 text-primary"
          />
          <Button
            disabled={props.isLoading}
            onClick={props.onConfirm}
            label={translate("confirm-modal.options.yes")}
            className="border-primary border-2 flex-1 bg-primary text-white"
          />
        </div>
      </div>
    </Modal>
  );
}
