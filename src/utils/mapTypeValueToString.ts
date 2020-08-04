import {SchemaObjectType} from '../types';
import {toTSArray} from './toTSArray';
import {toTSIntersection} from './toTSIntersection';
import {toTSUnion} from './toTSUnion';

/**
 * Maps a internally used type value to its string equivalent.
 * @param typeValue the value to map.
 * @param valueType the type of the value.
 */
export const mapTypeValueToString = (typeValue: string[], valueType: SchemaObjectType): string => {
  switch (valueType) {
    case 'allOf':
      return toTSIntersection(typeValue);
    case 'anyOf': {
      return toTSIntersection(typeValue.map((anyOf) => `Partial<${anyOf}>`));
    }
    case 'oneOf':
    case 'enum':
      return toTSUnion(typeValue);
    case 'array':
      return toTSArray(typeValue);
    case 'ref':
    case 'string':
    case 'number':
    case 'boolean':
    case 'object':
    default:
      return `${typeValue[0]}` || 'any';
  }
};
