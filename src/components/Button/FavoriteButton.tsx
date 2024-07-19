import { HeartIcon } from "@/assets/feather-icons/HeartIcon";

interface IFavoriteButton {
  isFavorite: boolean;
  id: string;
  toggleFavorite: (id: string) => void;
  className?: string;
}

export function FavoriteButton({
  isFavorite,
  id,
  toggleFavorite,
  className,
}: IFavoriteButton) {
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(id)}
      className={`button-empty ${isFavorite ? "[&>svg>*]" : ""} ${className}`}
    >
      {HeartIcon}
    </button>
  );
}
