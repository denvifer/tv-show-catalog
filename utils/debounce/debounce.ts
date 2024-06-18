export const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null;

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func();
      timeoutId = null;
    }, delay);
  };
};
