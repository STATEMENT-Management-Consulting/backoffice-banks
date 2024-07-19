import { useEffect, useState } from "react";
import { useTutorial } from "./useTutorial";
import { useApiGetCompany } from "@/views/profile/api/useApiGetCompany";
import { useTutorialsDictionary } from "locales/t/tutorials";
import { TTutorials } from "../Tutorial/tutorials.type";
import { useRouter } from "next/router";

export function useFavoriteGuide() {
  const router = useRouter();

  const { isGettingCompany } = useApiGetCompany();
  const { translate } = useTutorialsDictionary();
  const { notViewedSteps } = useTutorial();

  const [favorite_tutorials, setFavorite_tutorials] = useState<any[]>([]);
  const [runFavoriteTutorial, setRunFavoriteTutorial] =
    useState<boolean>(false);

  const favorite_tutorialsList: TTutorials[] = [
    {
      target: ".tab-favorite-recruitment",
      title: translate("FavoritesRecruitment.tab-favorite.title"),
      content: translate("FavoritesRecruitment.tab-favorite.content"),
    },
  ];

  useEffect(() => {
    setFavorite_tutorials(notViewedSteps(favorite_tutorialsList));

    if (!isGettingCompany) {
      setRunFavoriteTutorial(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGettingCompany, router.pathname]);

  return {
    favorite_tutorials,
    runFavoriteTutorial,
    setRunFavoriteTutorial,
  };
}
