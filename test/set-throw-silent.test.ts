import { setThrowSilent } from '../src/set-throw-silent';

describe('set throw silent function', () => {
  test('always return true', () => {
    expect(setThrowSilent({ a: 1 }, 'a', 2, null)).toBe(true);
    expect(setThrowSilent({}, '', 2, null)).toBe(true);
    expect(setThrowSilent([1, 2, 3], 0, 2, null)).toBe(true);
  });
});
