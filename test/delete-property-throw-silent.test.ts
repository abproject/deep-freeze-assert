import { deletePropertyThrowSilent } from '../src/delete-property-throw-silent';

describe('delete property throw silent function', () => {
  test('always return true', () => {
    expect(deletePropertyThrowSilent({ a: 1 }, 'a')).toBe(true);
    expect(deletePropertyThrowSilent({}, '')).toBe(true);
    expect(deletePropertyThrowSilent([1, 2, 3], 0)).toBe(true);
  });
});
