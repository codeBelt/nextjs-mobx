import { isDefined, uniq } from '../miscUtil';

describe('isDefined', () => {
  test('returns false if input is null or undefined, true otherwise', () => {
    expect(isDefined(undefined)).toBe(false);
    expect(isDefined(null)).toBe(false);
    expect(isDefined(NaN)).toBe(true);
    expect(isDefined(0)).toBe(true);
    expect(isDefined(false)).toBe(true);
  });
});

describe('uniq', () => {
  const duplicatedArray = ['a', 'b', 'b', 'c'];
  const noneDuplicatedArray = ['a', 'b', 'c'];

  test('should return remove duplications from an array', () => {
    const returnedArray = uniq(duplicatedArray);

    expect(returnedArray).toEqual(noneDuplicatedArray);
  });

  test('should return the original array without duplicates', () => {
    const returnedArray = uniq(noneDuplicatedArray);

    expect(returnedArray).toEqual(noneDuplicatedArray);
  });
});
