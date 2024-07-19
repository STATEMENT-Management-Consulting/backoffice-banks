import { useEffect, useState } from "react";

export const usePickCurrentLocation = () => {
  const [isGeolocationAvailable, setIsGeolocationAvailable] = useState(false);
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(false);
  const [isGettingCurrentLocation, setIsGettingCurrentLocation] =
    useState<boolean>(false);

  const getCurrentLocation = async () =>
    new Promise<
      Pick<GeolocationCoordinates, "latitude" | "longitude"> | undefined
    >((resolve) => {
      setIsGettingCurrentLocation(true);

      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const currentLocation: Pick<
            GeolocationCoordinates,
            "latitude" | "longitude"
          > = { latitude, longitude };

          setIsGettingCurrentLocation(false);

          return resolve(currentLocation);
        }
      );
    });

  useEffect(() => {
    if ("geolocation" in navigator) {
      setIsGeolocationAvailable(true);
    } else {
      setIsGeolocationAvailable(false);
    }
  }, []);

  useEffect(() => {
    const handleNavigatorPermissions = async () => {
      const { state } = await navigator.permissions.query({
        name: "geolocation",
      });

      if (state === "denied") {
        setIsGeolocationEnabled(false);
      } else if (state === "granted") {
        setIsGeolocationEnabled(true);
      } else {
        setIsGeolocationEnabled(false);
      }
    };

    handleNavigatorPermissions();
  }, []);

  return {
    isGeolocationAvailable,
    isGeolocationEnabled,
    getCurrentLocation,
    isGettingCurrentLocation,
  };
};
