/**
 * Converts a text to title case. For example, it
 * turns helloWorld into HelloWorld.
 * @param text the text to convert.
 */
export const toTitleCase = (text: string | undefined): string => {
  if (text === undefined) return '';
  return text[0].toLocaleUpperCase() + text.slice(1);
};
