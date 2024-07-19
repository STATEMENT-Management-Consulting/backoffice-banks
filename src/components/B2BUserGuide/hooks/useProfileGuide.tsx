import { useTutorialsDictionary } from "locales/t/tutorials";
import { TTutorials } from "../Tutorial/tutorials.type";
import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";

interface Props {
  router?: any;
}

export function useProfileGuide({ router }: Props) {
  const { isGettingCompany } = useApiGetCompany();

  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [profile_tutorials, setProfile_tutorials] = useState<any[]>([]);
  const [runProfileInfo, setRunProfileInfo] = useState<boolean>(false);

  const companyInfo_tutorialsList: TTutorials[] = [
    {
      target: ".profile-info-tab",
      title: translate("Profile.company-info.profile-info-tab.title"),
      content: translate("Profile.company-info.profile-info-tab.content"),
    },
    {
      target: ".add-services-profile",
      title: translate("Profile.company-info.add-services.title"),
      content: translate("Profile.company-info.add-services.content"),
    },
  ];

  const companyManager_tutorialsList: TTutorials[] = [
    {
      target: ".managers-profile-tab",
      title: translate("Profile.managers.managers-profile-tab.title"),
      content: translate("Profile.managers.managers-profile-tab.content"),
    },
    {
      target: ".managers-role-manager",
      title: translate("Profile.managers.role-managers.title"),
      content: translate("Profile.managers.role-managers.content"),
    },
    {
      target: ".managers-role-admin",
      title: translate("Profile.managers.role-admin.title"),
      content: translate("Profile.managers.role-admin.content"),
    },
    {
      target: ".managers-settings",
      title: translate("Profile.managers.settings.title"),
      content: translate("Profile.managers.settings.content"),
    },
  ];

  useEffect(() => {
    if (!isGettingCompany) {
      setRunProfileInfo(true);
    }

    switch (router.pathname) {
      case "/profile":
        setProfile_tutorials(notViewedSteps(companyInfo_tutorialsList));
        break;
      case "/profile/managers":
        setProfile_tutorials(notViewedSteps(companyManager_tutorialsList));
        break;
      default:
        setProfile_tutorials([]);
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    runProfileInfo,
    profile_tutorials,
    setRunProfileInfo,
  };
}
