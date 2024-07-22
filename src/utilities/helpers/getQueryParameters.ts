export function getQueryParameters(requestUrl: string) {
  const queryString = requestUrl?.split("?")[1];
  const queryParameters: Record<string, string> = {} as any;

  if (queryString) {
    const keyValuePairs = queryString.split("&");

    keyValuePairs.forEach((keyValuePair: string) => {
      const [key, value] = keyValuePair.split("=");
      queryParameters[key] = decodeURIComponent(value);
    });
  }

  return queryParameters;
}
