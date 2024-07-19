import { CongratulationIllustration } from "@/assets/illustrations/CongratulationIllustration";
import { InformIllustration } from "@/assets/illustrations/InformIllustration";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useAppOtherFeaturesDictionary } from "locales/t/AppOtherFeatures";

export function FirstTimeCreatorWelcomeMessage({
  nextStep,
  isFirstTime,
}: {
  nextStep: () => void;
  isFirstTime?: boolean;
}) {
  const { company } = useApiGetCompany();
  const { dictionary } = useAppOtherFeaturesDictionary();

  return (
    <Modal isOpen centered>
      <div className="stack gap-y-4 items-center w-[400px]">
        {isFirstTime ? <CongratulationIllustration /> : <InformIllustration />}

        <h6>
          {dictionary(
            isFirstTime
              ? "SetCompanyCreatorAsCollaborator.FirstTimeCreatorWelcomeMessage.welcome"
              : "SetCompanyCreatorAsCollaborator.FirstTimeCreatorWelcomeMessage.welcome-back",
            { company: company?.name ?? "" }
          )}
        </h6>
        <p className="text-center">
          {dictionary(
            isFirstTime
              ? "SetCompanyCreatorAsCollaborator.FirstTimeCreatorWelcomeMessage.message"
              : "SetCompanyCreatorAsCollaborator.FirstTimeCreatorWelcomeMessage.welcome-back-message"
          )}
        </p>
        <Button onClick={nextStep} className="w-full button-primary">
          {dictionary(
            "SetCompanyCreatorAsCollaborator.FirstTimeCreatorWelcomeMessage.continue"
          )}
        </Button>
      </div>
    </Modal>
  );
}
