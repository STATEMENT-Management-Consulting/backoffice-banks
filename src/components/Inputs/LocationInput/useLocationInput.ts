import { useEffect } from "react";
import { usePlacesAutocompleteService } from "./utils/goole-places/usePlacesAutocompleteService";
import { usePickCurrentLocation } from "./utils/goole-places/usePickCurrentLocation";
import { geocodeByLatLng } from "react-google-places-autocomplete";
import { useOpen } from "@/utilities/hooks/useOpen";
import { LatLng } from "react-google-places-autocomplete/build/types";

interface IUseLocationInput {
  onChange: (text: string) => void;
  onSelectLocation?: (text: string) => void;
}

export function useLocationInput({
  onChange,
  onSelectLocation,
}: IUseLocationInput) {
  const { isOpen, onOpen: open, onClose: close } = useOpen();
  const {
    getCurrentLocation,
    isGeolocationAvailable,
    isGettingCurrentLocation,
  } = usePickCurrentLocation();

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
    isQueryPredictionsLoading,
  } = usePlacesAutocompleteService();

  const handleOnChange = (query: string = "") => {
    onChange?.(query);
    getPlacePredictions({ input: query });
  };

  const handlerOnSelectLocation = (location: string) => {
    onSelectLocation?.(location);
    handleOnChange(location);
    close();
  };

  const handleGetCurrentLocation = async () => {
    const currentLocation = await getCurrentLocation();

    if (currentLocation) {
      try {
        const [{ formatted_address }] = await geocodeByLatLng({
          lat: currentLocation?.latitude,
          lng: currentLocation?.longitude,
        });
        handlerOnSelectLocation(formatted_address);
      } catch (error) {
        /* empty */
      }
    }
  };

  useEffect(() => {
    if (placePredictions.length)
      placesService?.getDetails(
        { placeId: placePredictions[0].place_id },
        () => {
          /* empty */
        }
      );
  }, [placePredictions, placesService]);

  return {
    handleOnChange,
    isGeolocationAvailable,
    locations: placePredictions?.map((place) => ({
      id: place?.place_id,
      name: place.description,
    })),
    handleGetCurrentLocation,
    getPlacePredictions,
    handlerOnSelectLocation,
    isOpen,
    open,
    close,
    isGettingCurrentLocation,
    isPlacePredictionsLoading,
    isQueryPredictionsLoading,
  };
}
