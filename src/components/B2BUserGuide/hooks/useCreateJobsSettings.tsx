import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useTutorialsDictionary } from "locales/t/tutorials";
import { TTutorials } from "../Tutorial/tutorials.type";
import { useRouter } from "next/router";

export function useCreateJobsSettings() {
  const router = useRouter();

  const { isGettingCompany } = useApiGetCompany();
  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [createJobsSettings, setCreateJobsSettings] = useState<any[]>([]);
  const [runCreateJobSettingsTutorial, setRunCreateJobSettingsTutorial] =
    useState<boolean>(false);

  const CreateJobsSettingsList: TTutorials[] = [
    {
      target: ".create-job-settings-compatibility",
      title: translate("CreateJobSettings.compatibility.title"),
      content: translate("CreateJobSettings.compatibility.content"),
    },
    {
      target: ".create-job-settings-language",
      title: translate("CreateJobSettings.language.title"),
      content: translate("CreateJobSettings.language.content"),
    },
    {
      target: ".create-job-settings-experience",
      title: translate("CreateJobSettings.experience.title"),
      content: translate("CreateJobSettings.experience.content"),
    },
  ];

  useEffect(() => {
    setCreateJobsSettings(notViewedSteps(CreateJobsSettingsList));

    if (!isGettingCompany) {
      setRunCreateJobSettingsTutorial(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    createJobsSettings,
    runCreateJobSettingsTutorial,
    setRunCreateJobSettingsTutorial,
  };
}
