import { deepFreezeAssert } from '../index';

describe('set immutability checks', () => {
  test('object', () => {
    const value = { a: 1 };
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      freezedValue.a = 2;
    };
    expect(mutationFn).toThrowError(`Attempt to set value=2 to property='a'`);
  });

  test('object nested', () => {
    const value = { a: { b: { c: 1 } } };
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      freezedValue.a.b.c = 2;
    };
    expect(mutationFn).toThrowError(`Attempt to set value=2 to property='c'`);
  });

  test('array', () => {
    const value = [1, 2, 3];
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      freezedValue.push(4);
    };
    expect(mutationFn).toThrowError(`Attempt to set value=4 to property='3'`);
  });

  test('array nested', () => {
    const value = [[[1, 2, 3]]];
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      freezedValue[0][0].push(4);
    };
    expect(mutationFn).toThrowError(`Attempt to set value=4 to property='3'`);
  });

  test('object nested in array', () => {
    const value = [[[{ a: { b: { c: 1 } } }]]];
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      freezedValue[0][0][0].a.b.c = 2;
    };
    expect(mutationFn).toThrowError(`Attempt to set value=2 to property='c'`);
  });
});
