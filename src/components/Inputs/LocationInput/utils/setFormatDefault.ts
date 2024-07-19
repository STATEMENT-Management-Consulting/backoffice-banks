import { OutputFormat, setDefaults } from "react-geocode";

export const setupGeoCode = () => {
  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    outputFormat: OutputFormat.JSON,
  });
};
