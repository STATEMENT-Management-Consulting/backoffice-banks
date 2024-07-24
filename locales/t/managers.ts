import useTranslations from "next-translate/useTranslation";
import { ExtractRecursiveKeys } from "./messages";
import auth from "../pt/managers/managers.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof auth>;

export function useManagersDictionary() {
  const { t: translation } = useTranslations("managers/managers");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
