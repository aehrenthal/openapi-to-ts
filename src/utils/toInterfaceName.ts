import {toPascalCase} from './toPascalCase';

/**
 * Converts a text to a TypeScript interface name.
 * @param text the text to convert.
 * @param prefixWithI to append the letter `I` as a prefix.
 */
export const toInterfaceName = (text: string | undefined, prefixWithI: boolean | undefined): string => {
  if (text === undefined) return '';
  return `${prefixWithI ? 'I' : ''}${toPascalCase(text)}`;
};
