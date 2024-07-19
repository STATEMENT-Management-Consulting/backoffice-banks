import { useFavoriteGuide } from "../hooks/useFavoriteGuide";
import { TutorialRide } from "../Tutorial/TutorialRide";

export function FavoritesGuide() {
  const { favorite_tutorials, runFavoriteTutorial, setRunFavoriteTutorial } =
    useFavoriteGuide();

  return (
    <TutorialRide
      continuous
      steps={favorite_tutorials}
      runTutorial={runFavoriteTutorial}
      setRunTutorial={setRunFavoriteTutorial}
    />
  );
}
