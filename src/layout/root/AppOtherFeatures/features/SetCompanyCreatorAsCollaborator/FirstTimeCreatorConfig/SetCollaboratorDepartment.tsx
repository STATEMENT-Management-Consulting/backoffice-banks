import { Button } from "@/components/Button/Button";
import { InputRadio } from "@/components/Inputs/InputRadio";
import { SelectInput } from "@/components/Inputs/SelectInput/SelectInput";
import { Modal } from "@/components/Modal/Modal";
import { Spinner } from "@/components/Spinner/Spinner";
import { DepartmentAddForm } from "@/views/departments/components/DepartmentAddForm";
import { useApiGetDepartments } from "@/views/profile/companyPositions/api/useApiGetPositions";
import { useAppOtherFeaturesDictionary } from "locales/t/AppOtherFeatures";
import { useProfileDictionary } from "locales/t/profile";
import { useState } from "react";

interface ISetCollaboratorDepartment {
  onCancel: (department?: { id: string; name: string }) => void;
  department?: {
    id: string;
    name: string;
  };
  departments?: Array<{
    id: string;
    name: string;
  }>;
  hasDepartments?: boolean;
}

export function SetCollaboratorDepartment({
  onCancel,
  department: currentDepartment,
  hasDepartments,
  departments,
}: ISetCollaboratorDepartment) {
  const [department, setDepartments] = useState<
    { id: string; name: string } | undefined
  >(currentDepartment);
  const translate = useProfileDictionary();
  const { dictionary } = useAppOtherFeaturesDictionary();
  const [existsDepartment, setExistsDepartment] = useState<"new" | "existents">(
    "existents"
  );

  const handleAddDepartment = () => {
    if (department) {
      onCancel(department);
    } else {
      setExistsDepartment("existents");
    }
  };

  const handleCancelDepartment = (dep?: typeof department) => {
    if (dep) {
      onCancel(dep);
    } else {
      setExistsDepartment("existents");
    }
  };

  return (
    <Modal
      isOpen
      centered
      title={translate("menu.departments.set-department.title")}
    >
      <div className="stack min-w-[400px] gap-y-4">
        <p>{translate("menu.departments.set-department.info")}</p>
        <>
          <div className="flex gap-x-4">
            <InputRadio
              isSelected={existsDepartment === "existents"}
              onClick={() => setExistsDepartment("existents")}
              placeholder={dictionary(
                "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.department.has-department.existents"
              )}
            />
            <InputRadio
              isSelected={existsDepartment === "new"}
              onClick={() => setExistsDepartment("new")}
              placeholder={dictionary(
                "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.department.has-department.new"
              )}
            />
          </div>

          {existsDepartment == "existents" ? (
            <>
              <SelectInput
                label={dictionary(
                  "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.department.label"
                )}
                options={departments}
                value={department?.id}
                floatOptions={false}
                onChangeOption={setDepartments}
              />

              <div className="grid grid-cols-2 gap-x-4 w-full">
                <Button
                  className="button-primary button-outline w-full"
                  onClick={() => onCancel()}
                >
                  {dictionary("SetCompanyCreatorAsCollaborator.common.cancel")}
                </Button>
                <Button
                  className="button-primary w-full"
                  onClick={handleAddDepartment}
                >
                  {dictionary("SetCompanyCreatorAsCollaborator.common.save")}
                </Button>
              </div>
            </>
          ) : (
            <DepartmentAddForm onCancel={handleCancelDepartment} />
          )}
        </>
      </div>
    </Modal>
  );
}
