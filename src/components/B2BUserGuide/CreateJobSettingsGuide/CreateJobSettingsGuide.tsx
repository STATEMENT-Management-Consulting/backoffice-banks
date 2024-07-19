import { TutorialRide } from "../Tutorial/TutorialRide";
import { useCreateJobsSettings } from "../hooks/useCreateJobsSettings";

export function CreateJobSettingsGuide() {
  const {
    createJobsSettings,
    runCreateJobSettingsTutorial,
    setRunCreateJobSettingsTutorial,
  } = useCreateJobsSettings();

  return (
    <TutorialRide
      continuous
      steps={createJobsSettings}
      runTutorial={runCreateJobSettingsTutorial}
      setRunTutorial={setRunCreateJobSettingsTutorial}
    />
  );
}
