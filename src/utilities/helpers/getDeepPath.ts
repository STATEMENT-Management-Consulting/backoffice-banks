export function getDeepValue(obj: Record<string, any>, path: string) {
  const pathSegments = path.split(".");
  let current = obj;

  for (const segment of pathSegments) {
    if (current && current.hasOwnProperty(segment)) {
      current = current[segment];
    } else {
      return undefined;
    }
  }

  return current;
}
