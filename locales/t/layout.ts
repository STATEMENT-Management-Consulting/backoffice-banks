import useTranslations from "next-translate/useTranslation";
import { ExtractRecursiveKeys } from "./messages";
import layout from "../pt/layout.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof layout>;

export function useLayoutDictionary() {
  const { t: translation } = useTranslations("layout");

  const t = (path: TranslationKeyPath, opts?: Record<string, string>) =>
    translation(path, opts);

  return t;
}
