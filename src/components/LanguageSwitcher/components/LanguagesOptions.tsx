import { LanguageItem } from "./LanguageItem";

type LanguageType = {
  icon: string;
  name: string;
  id: string;
};

export function LanguagesOptions({
  languages,
  setCurrentLanguage,
  currentLanguage,
}: {
  currentLanguage: LanguageType;
  setCurrentLanguage: (lang: LanguageType) => void;
  languages: LanguageType[];
}) {
  return (
    <div className="absolute top-[120%] shadow-sm overflow-hidden left-0 w-full rounded-2xl  bg-white stack divide-y divide-border">
      {languages?.map((lang) => (
        <LanguageItem
          key={lang.id}
          icon={lang.icon}
          name={lang.id?.toLocaleUpperCase()}
          id={lang.id}
          isActive={lang.id === currentLanguage?.id}
          setCurrentCountry={() => setCurrentLanguage(lang)}
        />
      ))}
    </div>
  );
}
