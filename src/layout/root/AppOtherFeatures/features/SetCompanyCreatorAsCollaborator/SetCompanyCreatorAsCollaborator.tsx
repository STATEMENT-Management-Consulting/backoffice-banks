import { useState } from "react";
import { FirstTimeCreatorWelcomeMessage } from "./Welcome";
import { FirstTimeCreatorConfig } from "./FirstTimeCreatorConfig/FirstTimeCreatorConfig";

export function SetCompanyCreatorAsCollaborator({
  close,
  isFirstTime,
}: {
  close: () => void;
  isFirstTime?: boolean;
}) {
  const [steps, setSteps] = useState<number>(1);

  return (
    <>
      {steps === 1 && (
        <FirstTimeCreatorWelcomeMessage
          isFirstTime={isFirstTime}
          nextStep={() => setSteps(2)}
        />
      )}
      {steps === 2 && (
        <FirstTimeCreatorConfig
          close={() => {
            close();
            setSteps(0);
          }}
        />
      )}
    </>
  );
}
