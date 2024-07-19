import { useJobGuide } from "../hooks/useJobGuide";
import { TutorialRide } from "../Tutorial/TutorialRide";

export function JobGuide() {
  const { job_tutorials, runJobTutorial, setRunJobTutorial } = useJobGuide();

  return (
    <TutorialRide
      continuous
      steps={job_tutorials}
      runTutorial={runJobTutorial}
      setRunTutorial={setRunJobTutorial}
    />
  );
}
