import { DropdownItem } from "@/components/Dropdown/Dropdown";
import { cn } from "@/styles/utils";
import { useLocale, Locales } from "@/utilities/hooks/useLocale";
import { useComponentsDictionary } from "locales/t/components";
import { useLayoutDictionary } from "locales/t/layout";
import { FiChevronLeft } from "react-icons/fi";

interface ILanguageOptions {
  onGoBack: () => void;
}

export function LanguageOptions({ onGoBack }: ILanguageOptions) {
  const translate = useLayoutDictionary();
  const { changeLanguage, locale } = useLocale();
  const componentsDictionary = useComponentsDictionary();
  const handleChangeLang = (lang: string) => {
    changeLanguage(lang);
  };

  const languages: Locales[] = ["pt", "en", "fr"];
  const defaultLanguages: Record<Locales, string> = {
    pt: "Português",
    en: "English",
    fr: "Français",
  };

  return (
    <div className="w-[360px]  tablet:min-w-[200px] tablet:max-w-[300px] flex flex-col gap-y-1">
      <div className="flex items-center gap-x-2">
        <button
          className="p-2 text-gray-400 hover:bg-gray-200 rounded-full transition-all"
          onClick={onGoBack}
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <div className="font-bold text-gray-400 text-sm">
          {translate("user.options.language.label")}
        </div>
      </div>
      {languages.map((language, key) => (
        <DropdownItem
          key={key}
          className={cn(
            locale === language
              ? "bg-transparent-primary text-primary"
              : "hover:bg-transparent-primary hover:text-primary text-gray-400",
            "cursor-pointer mt-2 w-full group grid grid-cols-[auto_1fr] items-start content-center p-[1rem] transition-all duration-150 rounded-[0.625rem] gap-x-[0.63rem outline-none]"
          )}
          onClick={() => handleChangeLang(language)}
        >
          <div className="w-full stack gap-y-1">
            <p
              className={cn(
                locale === language ? "!text-primary" : undefined,
                "text-text text-md font-bold"
              )}
            >
              {defaultLanguages[language]}
            </p>
            <p className="text-sm text-text-secondary">
              {componentsDictionary(`languages.${language}` as any)}
            </p>
          </div>
        </DropdownItem>
      ))}
    </div>
  );
}
