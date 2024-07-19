import { StepMerged } from "react-joyride";
import { useEffect } from "react";

interface Props {
  continuous: boolean;
  index: number;
  isLastStep: boolean;
  size: number;
  step: StepMerged;
  onClick?: (props: Props) => void;
}

export function BeaconComponent({ onClick, ...props }: Props) {
  useEffect(() => {
    if (props?.index === 0) {
      onClick?.(props);
    }
  }, [onClick, props]);

  return (
    <button {...props}>
      <div />
    </button>
  );
}
