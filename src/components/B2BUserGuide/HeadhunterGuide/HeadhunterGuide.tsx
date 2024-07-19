import { useHeadhunterGuide } from "../hooks/useHeadhunterGuide";
import { TutorialRide } from "../Tutorial/TutorialRide";

export function HeadhunterGuide() {
  const {
    headhunter_tutorials,
    runHeadhunterTutorial,
    setRunHeadhunterTutorial,
  } = useHeadhunterGuide();

  return (
    <TutorialRide
      continuous
      steps={headhunter_tutorials}
      runTutorial={runHeadhunterTutorial}
      setRunTutorial={setRunHeadhunterTutorial}
    />
  );
}
