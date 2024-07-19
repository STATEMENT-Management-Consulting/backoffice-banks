import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useTutorialsDictionary } from "locales/t/tutorials";
import { TTutorials } from "../Tutorial/tutorials.type";
import { useRouter } from "next/router";

export function useHeadhunterGuide() {
  const router = useRouter();

  const { isGettingCompany } = useApiGetCompany();
  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [headhunter_tutorials, setHeadhunter_tutorials] = useState<any[]>([]);
  const [runHeadhunterTutorial, setRunHeadhunterTutorial] =
    useState<boolean>(false);

  const Headhunter_tutorialsList: TTutorials[] = [
    {
      target: ".tab-headhunter-recruitment",
      title: translate("Headhunter.headhunter-tab.title"),
      content: translate("Headhunter.headhunter-tab.content"),
    },
  ];

  useEffect(() => {
    setHeadhunter_tutorials(notViewedSteps(Headhunter_tutorialsList));

    if (!isGettingCompany) {
      setRunHeadhunterTutorial(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    headhunter_tutorials,
    runHeadhunterTutorial,
    setRunHeadhunterTutorial,
  };
}
