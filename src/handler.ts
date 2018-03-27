import { SetFunction, DeletePropertyFunction } from "./types";

export function handler(setFn: SetFunction, deletePropertyFn: DeletePropertyFunction) {
  return {
    set: (target: any, p: PropertyKey, value: any, receiver: any): boolean => {
      setFn.call(null, target, p, value);
      return true;
    },
    deleteProperty: (target: any[], p: PropertyKey): boolean => {
      deletePropertyFn.call(null, target, p);
      return true;
    }
  };
}