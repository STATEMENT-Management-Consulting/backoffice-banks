import { useState } from "react";
import { MenuOption } from "./MenuOption";
import { FiChevronRight, FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { useLogout } from "@/utilities/session/useLogout";
import { useLayoutDictionary } from "locales/t/layout";
import { useMIRAOption } from "./useMIRAOption";
import { SettingOptions } from "./SettingOptions/SettingOptions";
import { AppKeys } from "@/utilities/appKeys";
import { useRouter } from "next/router";
import { useUserCompanies } from "@/views/auth/Companies/components/useUserCompanies";
import { AiOutlineSwitcher } from "react-icons/ai";

type TMenuOption = "settings";

export function MenuOptions() {
  const translate = useLayoutDictionary();
  const { push } = useRouter();
  const { logout } = useLogout();
  const { companies } = useUserCompanies();
  const { miraOption } = useMIRAOption();

  const [option, chooseOption] = useState<TMenuOption | undefined>(undefined);

  const handleChooseOption = (option: TMenuOption) => () => {
    chooseOption(option);
  };

  const getBack = () => {
    chooseOption(undefined);
  };

  const changeCompany = () => {
    sessionStorage.removeItem(AppKeys.companyId);
    window.location.href = "/auth/companies";
  };

  if (option === "settings") return <SettingOptions onGoBack={getBack} />;

  return (
    <div className="w-[360px]  tablet:min-w-[200px] tablet:max-w-[300px] stack gap-y-1">
      <MenuOption {...miraOption} />

      <div className="rule-horizontal" />

      <MenuOption
        name={translate("user.options.settings.label")}
        Icon={IoMdSettings}
        RightIcon={FiChevronRight}
        onClick={handleChooseOption("settings")}
      />
      {Number(companies?.length) > 1 && (
        <MenuOption
          name={translate("user.options.change-company.label")}
          Icon={AiOutlineSwitcher}
          onClick={changeCompany}
        />
      )}
      <MenuOption
        name={translate("user.options.logout.label")}
        Icon={FiLogOut}
        onClick={() => logout()}
      />
    </div>
  );
}
