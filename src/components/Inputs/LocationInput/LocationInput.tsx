import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { BaseInput } from "../BaseInput/BaseInput";
import { LocationIcon } from "@/assets/feather-icons/LocationIcon";
import { LocationInputContainer } from "./LocationInputContainer";

import { useLocationInput } from "./useLocationInput";
import { useComponentsDictionary } from "locales/t/components";

interface ILocationInput {
  onChange?: (value: string) => void;
  onSelectLocation?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  className?: string;
  wrapperClassName?: string;
  location?: string;
  required?: boolean;
  label?: string;
  jobLocation?: string;
  error?: string;
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function LocationInput({
  onChange,
  onKeyDown,
  error,
  location,
  required,
  className,
  label,
  disabled,
  onSelectLocation,
}: ILocationInput) {
  const [loc, setLoc] = useState<string | undefined>(location);
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    isOpen,
    open,
    close,
    locations,
    handleGetCurrentLocation,
    isGeolocationAvailable,
    handleOnChange,
    handlerOnSelectLocation,
    isGettingCurrentLocation,
    isPlacePredictionsLoading,
    isQueryPredictionsLoading,
  } = useLocationInput({
    onChange: (text) => {
      setLoc(text);
      onChange?.(text);
    },
    onSelectLocation,
  });
  const translate = useComponentsDictionary();

  return (
    <div ref={containerRef} className="stack relative">
      <BaseInput
        onKeyDown={onKeyDown}
        label={label}
        value={loc}
        title={location}
        onChange={handleOnChange}
        placeholder={translate("LocationInput.placeholder")}
        required={required}
        rightElement={LocationIcon}
        onFocus={open}
        className={className}
        error={error}
        disabled={disabled}
        isLoading={isPlacePredictionsLoading || isQueryPredictionsLoading}
      />
      {isOpen && (
        <LocationInputContainer
          containerRef={containerRef}
          close={close}
          location={location ?? ""}
          locations={locations}
          onSelectLocation={handlerOnSelectLocation}
          jobLocation=""
          pickCurrentLocation={handleGetCurrentLocation}
          isGeolocationAvailable={isGeolocationAvailable}
          isGettingCurrentLocation={isGettingCurrentLocation}
        />
      )}
    </div>
  );
}

LocationInput.displayName = "LocationInput";
