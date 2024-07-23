import useTranslation from "next-translate/useTranslation";
import json from "../pt/country.json";
import { ExtractRecursiveKeys } from "./messages";

type TranslationKeyPath = ExtractRecursiveKeys<typeof json>;

export const useCountryDictionary = () => {
  const { t } = useTranslation("country");

  const translate = (path: TranslationKeyPath, opt?: Record<string, string>) =>
    t(path, opt);

  return { translate };
};
