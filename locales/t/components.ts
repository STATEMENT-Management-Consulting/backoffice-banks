import useTranslations from "next-translate/useTranslation";
import { ExtractRecursiveKeys } from "./messages";
import auth from "../pt/components.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof auth>;

export function useComponentsDictionary() {
  const { t: translation } = useTranslations("components");

  const t = (path: TranslationKeyPath, props?: Record<string, string>) =>
    translation(path, props);

  return t;
}
