import {toTitleCase} from './toTitleCase';

/**
 * Converts a text to pascal case. For example, it
 * turns hello-world into HelloWorld.
 * @param text the text to convert.
 */
export const toPascalCase = (text: string | undefined): string => {
  if (text === undefined) return '';
  const input = text.toString().trim();
  if (input === '') return '';
  if (input.length === 1) return input.toLocaleUpperCase();
  const match = input.match(/[a-zA-Z0-9]+/g);
  if (match) {
    return match.map((m) => toTitleCase(m)).join('');
  }
  return input;
};
