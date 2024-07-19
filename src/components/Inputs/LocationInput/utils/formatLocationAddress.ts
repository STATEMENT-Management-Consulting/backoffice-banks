import { fromAddress } from "react-geocode";
import { extractLocationInfo } from "./extractLocationInfo";

export async function formatLocationAddress(location?: string) {
  return fromAddress(location ?? "")
    .then(async ({ results }) => {
      const location = extractLocationInfo(results);

      return Promise.resolve(location);
    })
    .catch(() => Promise.reject(undefined));
}
