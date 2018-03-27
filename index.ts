import { Config } from './dist/src/config.d';
import { configFactory } from './src/config-factory';
import { handler } from './src/handler';

export function deepFreezeAssert(target: any, config?: Config): any {
  const opts = configFactory(config);
  if (Array.isArray(target)) {
    const array = [...target].map(item => deepFreezeAssert(item));
    return new Proxy(array, handler(opts.setFn, opts.deletePropertyFn));
  } else if (target !== null && typeof target === 'object') {
    const obj = { ...target };
    Object.keys(obj).map(prop => {
      obj[prop] = deepFreezeAssert(obj[prop]);
    });
    return new Proxy(obj, handler(opts.setFn, opts.deletePropertyFn));
  } else {
    return target;
  }
}
