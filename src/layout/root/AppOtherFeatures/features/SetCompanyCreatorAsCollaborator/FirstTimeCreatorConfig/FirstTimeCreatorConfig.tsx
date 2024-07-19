import { Modal } from "@/components/Modal/Modal";
import { useAppOtherFeaturesDictionary } from "locales/t/AppOtherFeatures";
import { FirstTimeCreatorConfigCard } from "./FirstTimeCreatorConfigCard";
import { BriefcaseSvg } from "@/layout/root/RootLayoutHeader/RootLayoutNavigation/assets/BriefcaseSvg";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useApiGetUserCollaborator } from "@/views/auth/AuthVerify/api/useApiGetUserCollaborator";
import { useState } from "react";
import { useApiUpdateCollaborator } from "@/views/collaborators/api/useApiUpdateCollaborator";
import { Button } from "@/components/Button/Button";
import { SetCollaboratorPosition } from "./SetCollaboratorPosition";
import { Avatar } from "@/components/Avatar/Avatar";
import { useApiGetUser } from "@/views/auth/AuthVerify/api/useApiGetUser";

export function FirstTimeCreatorConfig({ close }: { close: () => void }) {
  const { user } = useApiGetUser();

  const {
    isOpen: isAddingPosition,
    onOpen: addPosition,
    onClose: closeAddPosition,
  } = useOpen();

  const { userCollaborator, isGettingUserCollaborator } =
    useApiGetUserCollaborator();
  const { updateCollaborator, isUpdatingCollaborator } =
    useApiUpdateCollaborator();
  const { dictionary } = useAppOtherFeaturesDictionary();
  const [complete, setComplete] = useState<number>(0);
  const [position, setPosition] = useState(userCollaborator?.position);

  const handleClosePosition = (position?: { id: string; name: string }) => {
    if (position) {
      setPosition(position);
      closeAddPosition();
      updateCollaborator(
        {
          id: userCollaborator?.id,
          position: position?.id,
        },
        {
          onSuccess: () => {
            setComplete(3);
          },
        }
      );
    } else {
      closeAddPosition();
    }
  };

  return (
    <Modal isOpen centered isLoading={isUpdatingCollaborator}>
      {complete === 3 ? (
        <div className="stack gap-y-4 w-[609px] text-center items-center">
          <div className="py-6">
            <Avatar
              src={user?.avatar}
              className="w-[220px] h-[220px] rounded-full"
            />
          </div>
          <h4>
            {dictionary(
              "SetCompanyCreatorAsCollaborator.UpdatingCollaborator.title"
            )}
          </h4>
          <p>
            {dictionary(
              "SetCompanyCreatorAsCollaborator.UpdatingCollaborator.info"
            )}
          </p>

          <Button onClick={close} className="w-full button-primary">
            {dictionary(
              "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.finish"
            )}
          </Button>
        </div>
      ) : (
        <div className="stack gap-y-4 w-[409px]">
          <h5>
            {dictionary(
              "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.title"
            )}
          </h5>
          <p>
            {dictionary(
              "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.info"
            )}
          </p>

          <div className="flex gap-x-4 mt-4">
            <FirstTimeCreatorConfigCard
              description={
                !!position?.id
                  ? position?.name
                  : dictionary(
                      "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.position.description"
                    )
              }
              icon={BriefcaseSvg}
              label={dictionary(
                "SetCompanyCreatorAsCollaborator.FirstTimeCreatorConfig.position.label"
              )}
              onClick={addPosition}
              done={!!userCollaborator?.position}
              isLoading={isGettingUserCollaborator}
            />
          </div>
        </div>
      )}

      <>
        {isAddingPosition ? (
          <SetCollaboratorPosition
            onCancel={handleClosePosition}
            position={position}
          />
        ) : null}
      </>
    </Modal>
  );
}
