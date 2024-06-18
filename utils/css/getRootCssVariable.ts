import { getCssVariable } from "./getCssVariable";

export const getRootCssVariable = (variable: string) =>
  getCssVariable(document.documentElement, variable);
