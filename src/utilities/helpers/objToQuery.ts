import { isEmpty } from "lodash";

export function objToQuery(
  obj: Record<string, string | number | undefined>,
  start: string = "?"
) {
  try {
    let objArr: string[] = [];

    Object.entries(obj).forEach(([key, entry]) => {
      if (!isEmpty(entry) || (typeof entry === "number" && entry !== undefined))
        objArr.push(`${key}=${entry}`);
    });

    return (objArr?.length > 0 ? start?.concat(objArr.join("&")) : "") ?? "";
  } catch {
    return "";
  }
}
