export function stringToObj<T>(
  inputString: string,
  separator: string
): T | undefined {
  const keyValuePairs: string[] = inputString.split(separator);

  let resultObj: T | undefined;

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    if (!resultObj) resultObj = {} as T;

    if (value) {
      resultObj = {
        ...resultObj,
        [key]: value,
      };
    }
  }

  return resultObj;
}
