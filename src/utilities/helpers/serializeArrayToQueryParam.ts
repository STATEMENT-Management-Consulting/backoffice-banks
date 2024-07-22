export function serializeArrayToQueryParam(
  array: (number | string)[],
  paramName: string
): string {
  if (array.length > 0 && paramName) {
    const serializedArray = array.join(",");
    const encodedParamName = encodeURIComponent(paramName);
    const encodedSerializedArray = encodeURIComponent(serializedArray);
    return `${encodedParamName}=${encodedSerializedArray}`;
  } else {
    return "";
  }
}
