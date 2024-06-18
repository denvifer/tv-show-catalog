export const getCssVariable = (element: Element, variable: string) =>
  getComputedStyle(element).getPropertyValue(variable);
