import { AppKeys } from "../appKeys";
import { getSavedCookie } from "./cookieUtils";

export const getAccessToken = () => {
  const accessToken = getSavedCookie(AppKeys.accessToken) ?? "";

  return accessToken;
};

export const getRefreshToken = () => {
  const accessToken = getSavedCookie(AppKeys.refreshToken) ?? "";

  return accessToken;
};
