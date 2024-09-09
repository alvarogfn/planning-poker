// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any) => any>(callback: T, wait: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}
