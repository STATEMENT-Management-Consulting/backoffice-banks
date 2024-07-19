import { Button } from "@/components/Button/Button";
import { InputRadio } from "@/components/Inputs/InputRadio";
import { PositionsInput } from "@/components/Inputs/PositionsInput/PositionsInput";
import { SelectInput } from "@/components/Inputs/SelectInput/SelectInput";
import { Modal } from "@/components/Modal/Modal";
import { TableAddPositionForm } from "@/views/profile/companyPositions/Components/TableAddPositionForm";
import { useAppOtherFeaturesDictionary } from "locales/t/AppOtherFeatures";
import { useProfileDictionary } from "locales/t/profile";
import { useState } from "react";

interface ISetCollaboratorPosition {
  onCancel: (position?: { id: string; name: string }) => void;
  department?: { id: string; name: string };
  position?: { id: string; name: string };
  positions?: Array<{
    id: string;
    name: string;
  }>;
}

export function SetCollaboratorPosition({
  onCancel,
}: ISetCollaboratorPosition) {
  const [position, setPosition] = useState<
    { id: string; name: string } | undefined
  >();
  const translate = useProfileDictionary();
  const { dictionary } = useAppOtherFeaturesDictionary();
  const [existsPosition, setExistsPosition] = useState<"new" | "existents">(
    "existents"
  );

  const handleAddPosition = () => {
    if (position) {
      onCancel(position);
    } else {
      setExistsPosition("existents");
    }
  };

  return (
    <Modal isOpen centered title={translate("menu.positions.label")}>
      <div className="stack min-w-[400px] gap-y-4">
        <p>
          {dictionary(
            "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.position.info"
          )}
        </p>

        <PositionsInput
          label={dictionary(
            "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.position.label"
          )}
          value={position?.id as string}
          floatOptions={false}
          onChangeOption={(value) => setPosition(value)}
        />

        <div className="grid grid-cols-2 gap-x-4 w-full">
          <Button
            className="button-primary button-outline w-full"
            onClick={() => onCancel()}
          >
            {dictionary("SetCompanyCreatorAsCollaborator.common.cancel")}
          </Button>
          <Button className="button-primary w-full" onClick={handleAddPosition}>
            {dictionary("SetCompanyCreatorAsCollaborator.common.finish")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
