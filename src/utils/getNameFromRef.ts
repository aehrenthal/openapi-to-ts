import {getSchemaNameFromRef} from './getSchemaNameFromRef';
import {toPascalCase} from './toPascalCase';

/**
 * Takes an OpenAPI $ref value and returns the name of the interface or type in pascal case.
 * For example, `#/components/schemas/NewPet` becomes `NewPet`.
 * @param ref the value of the ref, such as `#/components/schemas/NewPet`.
 */
export const getNameFromRef = (ref: string | undefined): string => {
  if (!ref) return '';
  return toPascalCase(getSchemaNameFromRef(ref));
};
