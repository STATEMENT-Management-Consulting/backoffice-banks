import usePlacesService, {
  usePlacesAutocompleteServiceConfig,
  usePlacesAutocompleteServiceResponse,
} from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export const usePlacesAutocompleteService = (
  options?: usePlacesAutocompleteServiceConfig
) =>
  usePlacesService({
    options: {
      ...options,
      input: "",
      // componentRestrictions: { country: "ao" },
    },
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  }) as usePlacesAutocompleteServiceResponse;
