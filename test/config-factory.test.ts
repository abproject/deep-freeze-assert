import { SetFunction, DeletePropertyFunction } from './../src/types';
import { setThrowSilent } from './../src/set-throw-silent';
import { configDefault } from './../src/config-default';
import { configFactory } from './../src/config-factory';
import { deletePropertyThrowSilent } from '../src/delete-property-throw-silent';

describe('config factory', () => {
  test(`when empty config as parameter should use default config`, () => {
    const config = configFactory();
    expect(config).toEqual(configDefault);
  });

  test(`when silent parameter should use 'silent methods'`, () => {
    const config = configFactory({silent: true});
    expect(config.setFn).toBe(setThrowSilent);
    expect(config.deletePropertyFn).toBe(deletePropertyThrowSilent);
  });

  test(`custom methods should be used instead of default ones, silent ignored`, () => {
    const setFn: SetFunction = () => true;
    const deletePropertyFn: DeletePropertyFunction = () => true;
    const config = configFactory({silent: true, setFn, deletePropertyFn});
    expect(config.setFn).toBe(setFn);
    expect(config.deletePropertyFn).toBe(deletePropertyFn);
  });
});