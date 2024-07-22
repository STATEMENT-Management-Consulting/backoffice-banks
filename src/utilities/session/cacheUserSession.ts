import { TPostSignIn } from "@/views/auth/SignIn/api/useApiSignIn";
import { AppKeys } from "../appKeys";
import { saveCookie } from "./cookieUtils";

interface ICacheSession extends Omit<TPostSignIn, "tokens"> {
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
}

export function cacheUserSession({ tokens, user }: ICacheSession) {
  try {
    if (tokens) {
      saveCookie(AppKeys.accessToken, tokens.accessToken);
      saveCookie(AppKeys.refreshToken, tokens.refreshToken);
    }
    saveCookie(AppKeys.userData, JSON.stringify(user));
    saveCookie(AppKeys.userId, user?.id);
    localStorage.setItem(AppKeys.userId, user?.id);

    if (user?.miraId) saveCookie(AppKeys.MIRAId, user?.miraId);
  } catch {}
}
