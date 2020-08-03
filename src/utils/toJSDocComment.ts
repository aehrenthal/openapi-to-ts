/**
 * Converts a text to a JS Doc comment.
 * @param text the text that should be converted.
 */
export const toJSDocComment = (text: string): string => {
  return `/**
  * ${text.trim().replace('\n+$', '').replace(/\n/g, '\n  * ')}
  */`;
};
