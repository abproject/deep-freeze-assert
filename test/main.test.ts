import { deepFreezeAssert } from "../index";

describe('checking returning data', () => {
  test(`string value should not be freezed and should have the same value`, () => {
    const value = 'string';
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`number value '1' should not be freezed and should have the same value`, () => {
    const value = 1;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`number value '0' should not be freezed and should have the same value`, () => {
    const value = 0;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`boolean value 'true' should not be freezed and should have the same value`, () => {
    const value = true;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`boolean value 'false' should not be freezed and should have the same value`, () => {
    const value = false;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`null value should not be freezed and should have the same value`, () => {
    const value = null;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`undefined value should not be freezed and should have the same value`, () => {
    const value = undefined;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`NaN value should not be freezed and should have the same value`, () => {
    const value = NaN;
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`function should not be freezed and should have the same value`, () => {
    const value = () => {};
    expect(deepFreezeAssert(value)).toBe(value);
  });

  test(`array should be freezed and should not have the same value`, () => {
    const value = [1];
    const freezedValue = deepFreezeAssert(value);
    expect(value).not.toBe(freezedValue);
    expect(value).toEqual(freezedValue);
  });

  test(`object should be freezed and should not have the same value`, () => {
    const value = {a: 1};
    const freezedValue = deepFreezeAssert(value);
    expect(value).not.toBe(freezedValue);
    expect(value).toEqual(freezedValue);
  });
});