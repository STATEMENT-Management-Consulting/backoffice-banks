export type EncodedObject<T> = Record<string, string> | T;

export function decodeObject<T>(encodedObject: T): Record<string, string> | T {
  const decodedObject: Record<string, string> | T = {};

  for (const [key, value] of Object.entries(
    encodedObject as Record<string, string>
  )) {
    decodedObject[key] = decodeURIComponent(value);
  }

  return decodedObject;
}

export function encodeObject<T>(encodedObject: T): Record<string, string> | T {
  const decodedObject: Record<string, string> | T = {};

  for (const [key, value] of Object.entries(
    encodedObject as Record<string, string>
  )) {
    decodedObject[key] = encodeURIComponent(value);
  }

  return decodedObject;
}
