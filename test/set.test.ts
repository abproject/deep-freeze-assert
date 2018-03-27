import {getPlural} from '../index';
test('adds 1 + 2 to equal 3', () => {
  expect(getPlural('1')).toBe('test1');
});