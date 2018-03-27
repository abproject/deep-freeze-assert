import { deepFreezeAssert } from "../index";

describe("delete immutability checks", () => {
  test("object", () => {
    const value = { a: 1 };
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      delete freezedValue.a;
    };
    expect(mutationFn).toThrowError(`Attempt to delete property 'a'`);
  });

  test("object nested", () => {
    const value = { a: { b: { c: 1 } } };
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      delete freezedValue.a.b.c;
    };
    expect(mutationFn).toThrowError(`Attempt to delete property 'c'`);
  });

  test("array", () => {
    const value = [1, 2, 3];
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      delete freezedValue[0];
    };
    expect(mutationFn).toThrowError(`Attempt to delete property '0'`);
  });

  test("array nested", () => {
    const value = [[[1, 2, 3]]];
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      delete freezedValue[0][0][2];
    };
    expect(mutationFn).toThrowError(`Attempt to delete property '2'`);
  });

  test("object nested in array", () => {
    const value = [[[{ a: { b: { c: 1 } } }]]];
    const freezedValue = deepFreezeAssert(value);
    const mutationFn = () => {
      delete freezedValue[0][0][0].a.b.c;
    };
    expect(mutationFn).toThrowError(`Attempt to delete property 'c'`);
  });
});
