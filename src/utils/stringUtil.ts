import camelcase from 'lodash.camelcase';
import startcase from 'lodash.startcase';
import kebabcase from 'lodash.kebabcase';

/**
 * Splits a string in half by a separator
 *
 * @param str string
 * @param separator string
 * @example
 *    splitBySeparator('https://api.tvmaze.com/search/shows?q=Friends', '.com');
 *
 *    // ['https://api.tvmaze.com', '/search/shows?q=Friends']
 */
export const splitBySeparator = (str: string, separator: string) => {
  return str.split(new RegExp(`(.*?${separator})`, 'g')).filter(Boolean);
};

export const titleCase = (str: string) => startcase(camelcase(str));
export const camelCase = (str: string) => camelcase(str);
export const pascalCase = (str: string) => startcase(camelcase(str)).replace(/ /g, '');
export const kebabCase = (str: string) => kebabcase(str);
