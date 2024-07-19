interface LocationInfo {
  city: string;
  country: string;
  countryCode: string;
  latitude: string;
  longitude: string;
}

export function extractLocationInfo(results: any[]): LocationInfo {
  const result = results[0]?.address_components?.reduce(
    (
      acc: {
        city: string;
        country: string;
        countryCode: string;
      },
      component: any
    ) => {
      if (component?.types.includes("locality"))
        acc.city = component?.long_name;
      else if (component?.types.includes("country")) {
        acc.country = component?.long_name;
        acc.countryCode = component?.short_name;
      }
      return acc;
    },
    {}
  );

  const geometry = results?.[0]?.geometry?.location;

  return {
    city: result?.city,
    country: result?.country as string,
    countryCode: result?.countryCode,
    latitude: geometry?.lat,
    longitude: geometry?.lng,
  };
}
