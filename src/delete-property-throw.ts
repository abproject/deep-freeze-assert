import { DeletePropertyFunction } from './types';

export const deletePropertyThrow: DeletePropertyFunction = (target: any, p: PropertyKey): boolean => {
  console.log('↓ Object is immutable', target);
  throw new Error(`Attempt to delete property '${p}'`);
};
