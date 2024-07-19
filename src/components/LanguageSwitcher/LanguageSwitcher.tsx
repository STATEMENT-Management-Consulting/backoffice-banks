import { ChevronDown20Icon } from "@/assets/feather-icons/ChevronDown20Icon";
import { Locales, useLocale } from "@/utilities/hooks/useLocale";
import { useRef, useState } from "react";
import { LanguagesOptions } from "./components/LanguagesOptions";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import {
  FranceFlagIcon,
  PortugalFlagIcon,
  UnitedKingdomFlagIcon,
} from "./flags";
import Image from "next/image";

type LanguageType = {
  id: string;
  name: string;
  icon: string;
};
export function LanguageSwitcher() {
  const { changeLanguage, locale } = useLocale();
  const flags = [
    {
      id: "pt",
      icon: PortugalFlagIcon,
    },
    {
      id: "fr",
      icon: FranceFlagIcon,
    },
    {
      id: "en",
      icon: UnitedKingdomFlagIcon,
    },
  ];

  const locales: Locales[] = ["pt", "en", "fr"];
  const languages = locales.map((locale) => ({
    id: locale,
    name: locale,
    icon: flags.find((flag) => flag.id === locale)?.icon as string,
  }));

  const [currentLanguage, setCurrentLanguage] = useState<LanguageType>(
    languages?.find((lang) => lang.id === locale) || languages[0]
  );

  const ref = useRef(null);
  useOutsideClick(ref, () => setOpenLanguagesOptions(false));

  const [openLanguagesOptions, setOpenLanguagesOptions] =
    useState<boolean>(false);

  const handleChangeLanguage = (lang: LanguageType) => {
    changeLanguage(lang.id);
    setCurrentLanguage(lang);
  };

  return (
    <div
      ref={ref}
      onClick={() => setOpenLanguagesOptions(!openLanguagesOptions)}
      className="bg-white py-3 px-4 relative cursor-pointer rounded-2xl shadow-sm w-32 justify-between flex items-center"
    >
      <div className="flex items-center gap-x-2">
        <Image
          src={currentLanguage?.icon}
          className="w-4 h-4"
          alt={currentLanguage?.name}
        />

        <span className="text-body-md text-gray-shade8">
          {currentLanguage?.id?.toLocaleUpperCase()}
        </span>
      </div>

      <button
        onClick={() => setOpenLanguagesOptions(!openLanguagesOptions)}
        className={`button-empty transition-all ${
          openLanguagesOptions ? "rotate-180" : ""
        }`}
      >
        {ChevronDown20Icon}
      </button>

      {openLanguagesOptions && (
        <LanguagesOptions
          setCurrentLanguage={handleChangeLanguage}
          currentLanguage={currentLanguage as LanguageType}
          languages={languages}
        />
      )}
    </div>
  );
}
