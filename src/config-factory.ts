import { setThrowSilent } from './set-throw-silent';
import { setThrow } from './set-throw';
import { configDefault } from './config-default';
import { Config, ConfigOptions } from './types';
import { deletePropertyThrowSilent } from './delete-property-throw-silent';

export const configFactory: (config?: ConfigOptions) => Config = config => {
  if (config && config.silent === true) {
    return {
      ...configDefault,
      setFn: setThrowSilent,
      deletePropertyFn: deletePropertyThrowSilent,
      ...config
    };
  }
  return {
    ...configDefault,
    ...config
  };
};
