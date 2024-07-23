import useTranslations from "next-translate/useTranslation";
import { ExtractRecursiveKeys } from "./messages";
import auth from "../pt/dashboard/dashboard.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof auth>;

export function useDashboardDictionary() {
  const { t: translation } = useTranslations("dashboard/dashboard");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
