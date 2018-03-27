import { SetFunction } from "./types";

export const setThrow: SetFunction = (target: any, p: PropertyKey, value: any): boolean => {
  console.log('↓ Object is immutable', target);
  throw new Error(`Attempt to set value=${value} to property='${p}'`);
}