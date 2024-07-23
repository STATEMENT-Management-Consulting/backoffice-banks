import useTranslations from "next-translate/useTranslation";
import { ExtractRecursiveKeys } from "./messages";
import auth from "../pt/companies/companies.json";

export type TranslationKeyPath = ExtractRecursiveKeys<typeof auth>;

export function useCompaniesDictionary() {
  const { t: translation } = useTranslations("companies/companies");

  const translate = (
    path: TranslationKeyPath,
    props?: Record<string, string>
  ) => translation(path, props);

  return { translate };
}
