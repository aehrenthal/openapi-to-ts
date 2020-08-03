import {capitalizeFirstLetter} from './capitalizeFirstLetter';

/**
 * Converts an OpenAPI schema name to a TypeScript interface name.
 * Every interface will start with the letter I.
 * @param name the name of the OpenAPI schema to convert.
 */
export const convertName = (name: string): string => {
  return `I${capitalizeFirstLetter(name)}`;
};
