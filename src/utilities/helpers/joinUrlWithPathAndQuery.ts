export function joinUrlWithPathAndQuery(
  baseUrl: string,
  path: string,
  query?: Record<string, string>
): string {
  try {
    if (!baseUrl.endsWith("/")) {
      baseUrl += "/";
    }

    if (path.startsWith("/")) {
      path = path.substring(1);
    }

    let url = baseUrl + path;

    if (query) {
      const queryParams = Object.keys(query)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(query[key])
        )
        .join("&");

      if (queryParams) {
        url += "?" + queryParams;
      }
    }

    return url;
  } catch {
    return "";
  }
}
