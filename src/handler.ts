import { SetFunction, DeletePropertyFunction } from './types';

export function handler(setFn: SetFunction, deletePropertyFn: DeletePropertyFunction) {
  return {
    set: (target: any, p: PropertyKey, value: any, receiver: any): boolean => {
      return setFn.call(undefined, target, p, value);
    },
    deleteProperty: (target: any[], p: PropertyKey): boolean => {
      return deletePropertyFn.call(undefined, target, p);
    }
  };
}
