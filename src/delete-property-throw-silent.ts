import { DeletePropertyFunction } from "./types";

export const deletePropertyThrowSilent: DeletePropertyFunction = (target: any, p: PropertyKey): boolean => {
  console.warn(`Object is immutable, attempt to delete property '${p}'\n`, target);
  return true;
}