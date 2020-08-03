import {toCapitalizedFirstLetter} from './toCapitalizedFirstLetter';

/**
 * Converts a text to a TypeScript interface name.
 * It capitalizes the schema name and adds an `I` to the start.
 * @param text the text to convert.
 */
export const toInterfaceName = (text: string): string => {
  return `I${toCapitalizedFirstLetter(text)}`;
};
