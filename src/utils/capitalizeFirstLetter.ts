/**
 * A small util method to capitalize the first letter of a string.
 * @param value the string that should be capitalized.
 */
export const capitalizeFirstLetter = (value: string): string => {
  if (typeof value !== 'string') {
    return '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
};
