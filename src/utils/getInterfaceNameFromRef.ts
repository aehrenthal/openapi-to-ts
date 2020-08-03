import {getSchemaNameFromRef} from './getSchemaNameFromRef';
import {toInterfaceName} from './toInterfaceName';

/**
 * Takes an OpenAPI $ref value and returns the name of the interface.
 * For example, `#/components/schemas/NewPet` becomes `INewPet`.
 * @param ref the value of the ref, such as `#/components/schemas/NewPet`.
 */
export const getInterfaceNameFromRef = (ref: string | undefined): string => {
  if (!ref) return '';
  return toInterfaceName(getSchemaNameFromRef(ref));
};
