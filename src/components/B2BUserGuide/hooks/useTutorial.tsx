import { queryClient } from "@/api/cache/reactQuery";
import { useToast } from "@/components/Toasts/Toast";
import { useTutorialsDictionary } from "locales/t/tutorials";
import { useApiStoreTutorial } from "../api/useApiStoreTutorial";

type TSaveSteps = (status: string) => void;
type TViewedTutorialStatus = () => string[];
type TNotViewedSteps = (steps: any[]) => any[];
type TSaveAllSteps = (status: string[]) => void;

export function useTutorial() {
  const { errorToast } = useToast();
  const { translate } = useTutorialsDictionary();
  const { storeTutorial } = useApiStoreTutorial();

  const saveSteps: TSaveSteps = (status: string) => {
    const oldStatus: string[] = viewedTutorialStatus() ?? [];

    storeTutorial(
      {
        tutorialsSeen: [...oldStatus.filter((item) => item !== status), status],
      },
      {
        onError: () =>
          errorToast({
            title: translate("Toast.error.title"),
            message: translate("Toast.error.message"),
          }),
      }
    );
  };

  const saveAllSteps: TSaveAllSteps = (statusAll: string[]) => {
    const oldStatus: string[] = viewedTutorialStatus() ?? [];
    const newStatus: string[] = [];

    statusAll.map((status) => {
      if (!oldStatus.includes(status)) {
        newStatus.push(status);
      }
    });

    storeTutorial(
      {
        tutorialsSeen: [...newStatus, ...statusAll, ...oldStatus],
      },
      {
        onError: () =>
          errorToast({
            title: translate("Toast.error.title"),
            message: translate("Toast.error.message"),
          }),
      }
    );
  };

  const viewedTutorialStatus: TViewedTutorialStatus = () => {
    const query = queryClient.getQueryData(["user/account"]);
    return ((query as any)?.tutorialsSeen as string[]) ?? [];
  };

  const notViewedSteps: TNotViewedSteps = (steps: any[]) => {
    return steps.filter(
      (step) => !viewedTutorialStatus().includes(step?.target)
    );
  };

  return { saveSteps, saveAllSteps, viewedTutorialStatus, notViewedSteps };
}
