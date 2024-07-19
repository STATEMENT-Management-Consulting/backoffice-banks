import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useTutorialsDictionary } from "locales/t/tutorials";
import { TTutorials } from "../Tutorial/tutorials.type";
import { useRouter } from "next/router";

export function useCollaboratorsGuide() {
  const router = useRouter();

  const { isGettingCompany } = useApiGetCompany();
  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [collaborators, setCollaborators] = useState<any[]>([]);
  const [runCollaborators, setRunCollaborators] = useState<boolean>(false);

  const collaborators_tutorialsList: TTutorials[] = [
    {
      target: ".organizational-add-collaborators",
      title: translate("Collaborators.add-collaborators.title"),
      content: translate("Collaborators.add-collaborators.content"),
    },
  ];

  const organizationalStruct_tutorialsList: TTutorials[] = [
    {
      target: ".organizational-struct-tab",
      title: translate("Collaborators.tab-organizational-struct.title"),
      content: translate("Collaborators.tab-organizational-struct.content"),
    },
  ];

  useEffect(() => {
    if (!isGettingCompany) {
      setRunCollaborators(true);
    }

    switch (router.pathname) {
      case "/collaborators":
        setCollaborators(notViewedSteps(collaborators_tutorialsList));
        break;
      case "/collaborators/organizational-structure":
        setCollaborators(notViewedSteps(organizationalStruct_tutorialsList));
        break;
      default:
        setCollaborators([]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    collaborators,
    runCollaborators,
    setRunCollaborators,
  };
}
