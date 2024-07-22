import { useJobStagesDictionary } from "locales/t/recruitment/stage";

const default_stages = [
  "applied",
  "interview",
  "proposal",
  "approved",
  "certificate",
  "cancelled",
];

export function useGetDefaultStage() {
  const { stageDictionary } = useJobStagesDictionary();

  const isDefaultStage = (stage: string) => {
    return default_stages.includes(stage);
  };

  const getDefaultStage = (stage: string) => {
    return isDefaultStage(stage)
      ? stageDictionary(`default-sages.${stage}` as any)
      : stage;
  };

  return { isDefaultStage, getDefaultStage };
}
