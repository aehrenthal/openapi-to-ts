/**
 * Converts any string to camel case. For example, it would change
 * UserName to userName.
 * @param text the text to convert to camel case.
 */
export const toCamelCase = (text: string | undefined) => {
  if (!text) return '';
  return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
