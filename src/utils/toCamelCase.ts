/**
 * Converts a text to pascal case. For example, it
 * turns HelloWorld into helloWorld.
 * @param text the text to convert.
 */
export const toCamelCase = (text: string | undefined): string => {
  if (!text) return '';
  return text.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return '';
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
