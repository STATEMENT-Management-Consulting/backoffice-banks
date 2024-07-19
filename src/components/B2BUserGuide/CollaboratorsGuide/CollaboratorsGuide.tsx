import { useEffect } from "react";
import { useRouter } from "next/router";
import { useOpen } from "@/utilities/hooks/useOpen";
import { TutorialRide } from "../Tutorial/TutorialRide";
import { useCollaboratorsGuide } from "../hooks/useCollaboratorsGuide";

export function CollaboratorsGuide() {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useOpen();

  const { collaborators, runCollaborators, setRunCollaborators } =
    useCollaboratorsGuide();

  useEffect(() => {
    onClose();
    setTimeout(() => {
      onOpen();
    }, 5);
  }, [router.pathname]);

  return (
    isOpen && (
      <TutorialRide
        continuous
        steps={collaborators}
        runTutorial={runCollaborators}
        setRunTutorial={setRunCollaborators}
      />
    )
  );
}
