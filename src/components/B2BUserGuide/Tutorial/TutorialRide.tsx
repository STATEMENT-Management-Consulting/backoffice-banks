import Joyride from "react-joyride";
import { BeaconComponent } from "./Beacon";
import { CardTutorial } from "./CardTutorial";
import { useTutorial } from "../hooks/useTutorial";

interface Props {
  runTutorial: boolean;
  setRunTutorial: (value: boolean) => void;
  steps: any[];
  moveOn?: boolean;
  continuous?: boolean;
  background?: boolean;
}

export function TutorialRide({
  runTutorial,
  steps,
  setRunTutorial,
  moveOn,
  continuous,
  background,
}: Props) {
  const { saveAllSteps } = useTutorial();

  const handleCallBack = (data: any) => {
    if (data?.action === "close") {
      saveAllSteps(steps.map((step) => step.target));
      setRunTutorial(false);
    }
  };

  return (
    <Joyride
      run={runTutorial}
      disableScrolling={false}
      continuous={continuous}
      callback={handleCallBack}
      steps={steps}
      disableOverlay
      disableScrollParentFix
      beaconComponent={BeaconComponent}
      tooltipComponent={(props) => (
        <CardTutorial {...props} moveOn={moveOn as boolean} />
      )}
      floaterProps={{ hideArrow: true }}
    />
  );
}
