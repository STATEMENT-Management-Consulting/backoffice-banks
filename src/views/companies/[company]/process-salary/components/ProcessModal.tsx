import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { useProcessSalaryDictionary } from "locales/t/process-salary";

type ProcessModalProps = {
  onClose: () => void;
};

export function ProcessModal({ onClose }: ProcessModalProps) {
  const { translate } = useProcessSalaryDictionary();

  return (
    <Modal
      centered
      onClose={onClose}
      isOpen
      className="w-full max-w-[31.25rem]"
    >
      <div className="w-full stack gap-y-6">
        <div className="stack gap-y-2">
          <h4>{translate("process-salary.confirm-modal.title")}</h4>

          <p>{translate("process-salary.confirm-modal.label")}</p>
        </div>

        <div className="flex w-full items-center gap-x-6">
          <Button
            onClick={onClose}
            className="button-outline flex-1 border !border-primary !text-primary"
            label={translate("process-salary.confirm-modal.options.change")}
          />
          <Button
            className="button-primary flex-1 border !border-primary !text-white"
            label={translate("process-salary.confirm-modal.options.confirm")}
          />
        </div>
      </div>
    </Modal>
  );
}
