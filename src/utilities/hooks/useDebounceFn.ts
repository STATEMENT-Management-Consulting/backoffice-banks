export function useDebounceFn(
  callback: (value?: string) => void,
  waitTime: number = 500
) {
  const debounceFn = (value?: string) => {
    setTimeout(() => {
      callback(value);
    }, waitTime);
  };

  return { debounceFn };
}
