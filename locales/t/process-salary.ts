import useTranslations from "next-translate/useTranslation";
import { ExtractRecursiveKeys } from "./messages";
import auth from "../pt/companies/process-salary.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof auth>;

export function useProcessSalaryDictionary() {
const { t: translation } = useTranslations("companies/process-salary");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
