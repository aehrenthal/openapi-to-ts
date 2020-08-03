/**
 * A small util method to capitalize the first letter of a text.
 * @param text the text that should be capitalized.
 */
export const capitalizeFirstLetter = (text: string): string => {
  if (typeof text !== 'string') {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};
