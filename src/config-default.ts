import { DeletePropertyFunction, SetFunction } from './types';
import { setThrow } from './set-throw';
import { deletePropertyThrow } from './delete-property-throw';

export const configDefault = {
  silent: false,
  setFn: setThrow,
  deletePropertyFn: deletePropertyThrow
};
