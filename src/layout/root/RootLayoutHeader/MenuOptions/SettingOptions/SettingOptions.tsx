import { useLayoutDictionary } from "locales/t/layout";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MenuOption } from "../MenuOption";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa6";
import { LanguageOptions } from "./LanguageOptions";

interface ISettingOptions {
  onGoBack: () => void;
}

type SettingsOptions = "language";

export function SettingOptions({ onGoBack }: ISettingOptions) {
  const [option, chooseOption] = useState<SettingsOptions | undefined>();
  const translate = useLayoutDictionary();

  const handleChangeOption = (option: SettingsOptions) => {
    chooseOption(option);
  };

  const backToSettings = () => {
    chooseOption(undefined);
  };

  if (option === "language")
    return <LanguageOptions onGoBack={backToSettings} />;

  return (
    <div className="w-[360px]  tablet:min-w-[200px] tablet:max-w-[300px]  flex flex-col gap-y-1">
      <div className="flex items-center gap-x-2">
        <button
          className="p-2 text-gray-400 hover:bg-gray-200 rounded-full transition-all"
          onClick={onGoBack}
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <div className="font-bold text-gray-400 text-sm">
          {translate("user.options.settings.label")}
        </div>
      </div>
      <MenuOption
        name={translate("user.options.language.label")}
        Icon={FaGlobe}
        RightIcon={FiChevronRight}
        onClick={() => handleChangeOption("language")}
      />
    </div>
  );
}
