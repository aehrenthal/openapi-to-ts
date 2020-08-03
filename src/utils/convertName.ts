import {capitalizeFirstLetter} from './capitalizeFirstLetter';

/**
 * Converts an OpenAPI schema name to a TypeScript interface name.
 * It capitalizes the schema name and adds an `I` to the start.
 * @param name the name of the OpenAPI schema to convert.
 */
export const convertName = (name: string): string => {
  return `I${capitalizeFirstLetter(name)}`;
};
