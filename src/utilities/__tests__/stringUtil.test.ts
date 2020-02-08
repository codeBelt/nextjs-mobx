import { camelCase, pascalCase, titleCase, kebabCase } from '../stringUtil';

const testStrings = ['lives-Down_by-the.River', 'Lives`Down,by~the RIVER', 'LivesDownBY  the RIVER'];

describe('camelCase', () => {
  test('should return camelCase string', () => {
    const expectedResult = 'livesDownByTheRiver';

    testStrings.forEach((str) => {
      expect(camelCase(str)).toEqual(expectedResult);
    });
  });
});

describe('titleCase', () => {
  test('should return Title Case string', () => {
    const expectedResult = 'Lives Down By The River';

    testStrings.forEach((str) => {
      expect(titleCase(str)).toEqual(expectedResult);
    });
  });
});

describe('pascalCase', () => {
  test('should return PascalCase string', () => {
    const expectedResult = 'LivesDownByTheRiver';

    testStrings.forEach((str) => {
      expect(pascalCase(str)).toEqual(expectedResult);
    });
  });
});

describe('kebabCase', () => {
  test('should return kebab-case string', () => {
    const expectedResult = 'lives-down-by-the-river';

    testStrings.forEach((str) => {
      expect(kebabCase(str)).toEqual(expectedResult);
    });
  });
});
