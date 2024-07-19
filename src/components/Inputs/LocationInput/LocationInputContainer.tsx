import { LocationIcon } from "@/assets/feather-icons/LocationIcon";
import { useOutsideClick } from "@/utilities/hooks/useOutsideClick";
import { useComponentsDictionary } from "locales/t/components";
import { RefObject } from "react";
import { LocationItem } from "./LocationItem";
import { Spinner } from "@/components/Spinner/Spinner";

interface ILocationInputContainer {
  containerRef: RefObject<HTMLDivElement>;
  location: string;
  jobLocation?: string;
  onSelectLocation: (location: string) => void;
  pickCurrentLocation: () => void;
  close: () => void;
  isGeolocationAvailable: boolean;
  locations: Array<{ id: string; name: string }>;
  isGettingCurrentLocation: boolean;
}

export function LocationInputContainer({
  containerRef,
  close,
  onSelectLocation,
  pickCurrentLocation,
  isGeolocationAvailable,
  locations,
  location,
  isGettingCurrentLocation,
}: ILocationInputContainer) {
  useOutsideClick(containerRef, close);
  const componentsDictionary = useComponentsDictionary();

  const dynamicRegex = new RegExp(location, "gi");
  const paintMatchedLocations = (value: string) =>
    location
      ? value.replace(dynamicRegex, (match) => {
          return `<b>${match}</b>`;
        })
      : value;

  return (
    <div className="relative">
      <div className="absolute top-5 z-10 inset-x-0 bg-white shadow-md rounded-[0.75rem] stack gap-2 divide-y divide-border">
        {isGeolocationAvailable && (
          <button
            type="button"
            onClick={pickCurrentLocation}
            className="self-center button-outline button-primary !border-none [&>svg>*]:stroke-primary"
            disabled={isGettingCurrentLocation}
          >
            {isGettingCurrentLocation ? (
              <Spinner className="!w-5 !h-5" />
            ) : (
              LocationIcon
            )}
            {componentsDictionary("LocationInput.pick-current-location")}
          </button>
        )}
        {!!locations?.length && (
          <div className="stack gap-2 max-h-[200px] overflow-y-auto">
            {locations.map((location) => (
              <LocationItem
                key={location?.id}
                onSelect={() => onSelectLocation?.(location.name)}
                value={paintMatchedLocations(location?.name)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
