export const objToQueryString = (
  obj: Record<string, number | string | boolean |undefined>
) => {
  return Object.keys(obj)
    .filter((key) => obj[key])
    .map((key) => {
      return `${key}=${obj[key]}`;
    })
    .join("&");
};
