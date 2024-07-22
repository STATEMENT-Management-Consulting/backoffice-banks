export function limitStringWithDots(str: string, limit: number) {
  try {
    if (str?.length > limit) {
      return str.slice(0, limit) + "...";
    }
  } catch (error) {}
  return str;
}
