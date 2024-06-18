export const convertVwToPixels = (vwValue: string) => {
  const vw = parseFloat(vwValue.trim());
  return (vw / 100) * window.innerWidth;
};
