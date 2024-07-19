import { useApiGetServices } from "@/views/profile/api/useApiGetServices";
import { useProfileGuide } from "../hooks/useProfileGuide";
import { TutorialRide } from "../Tutorial/TutorialRide";
import { useProfileCompanyContext } from "@/views/profile/context/ProfileCompanyContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useOpen } from "@/utilities/hooks/useOpen";
import { useApiGetManagers } from "@/views/profile/CompanyManagers/api/useApiGetManagers";

export function ProfileGuide() {
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useOpen();
  const { managers, isGettingManagers } = useApiGetManagers();
  const [hasManagers, setHasManagers] = useState<boolean>(false);

  const { runProfileInfo, profile_tutorials, setRunProfileInfo } =
    useProfileGuide({ router });

  const { isGettingServices } = useApiGetServices();
  const { isGettingCompany } = useProfileCompanyContext();

  const getItems = (): string[] => {
    if (router.pathname == "/profile/managers") {
      return !hasManagers
        ? profile_tutorials?.filter(
            (item) => item.target !== ".managers-role-manager"
          )
        : profile_tutorials;
    }

    return profile_tutorials;
  };

  useEffect(() => {
    onClose();
    setTimeout(() => {
      onOpen();
    }, 5);
  }, [router.pathname]);

  useEffect(() => {
    if (managers?.length) {
      setHasManagers(managers.some((manager) => manager.role === "manager"));
    }
  }, [isGettingManagers]);

  if (isGettingManagers) return null;

  return (
    isOpen && (
      <TutorialRide
        continuous
        steps={
          isGettingServices && isGettingCompany
            ? [profile_tutorials[0]]
            : getItems()
        }
        runTutorial={runProfileInfo}
        setRunTutorial={setRunProfileInfo}
      />
    )
  );
}
