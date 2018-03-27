import { SetFunction } from "./types";

export const setThrowSilent: SetFunction = (target: any, p: PropertyKey, value: any) => {
  console.warn(`Object is immutable, attempt to set value='${value}' to property='${p}'\n`, target);
  return true;
}