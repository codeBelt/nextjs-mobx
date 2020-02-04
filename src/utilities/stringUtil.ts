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
