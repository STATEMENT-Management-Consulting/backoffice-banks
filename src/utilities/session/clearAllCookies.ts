import { destroyCookie } from "./cookieUtils";

export function clearAllCookies() {
  const cookies = document.cookie.split(";");

  cookies.forEach(function (cookie) {
    const parts = cookie.split("=");
    const key = parts[0].trim();
    try {
      destroyCookie(key);
    } catch {}
  });
}
