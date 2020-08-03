import {IOpenAPISchemaObject, SchemaObjectType} from '../types';

/**
 * This method detects the object type of a given schema. The other
 * util methods can then approriately construct types in their unique
 * ways. For example, Array's are constructed in a different way
 * than anyOf, oneOf or ref's.
 * @param schemaObject the schema object for which the type to detect.
 */
export const detectSchemaObjectType = (
  schemaObject: IOpenAPISchemaObject | undefined
): SchemaObjectType | undefined => {
  if (!schemaObject) return undefined;

  if (schemaObject.$ref) return 'ref';

  if (Array.isArray(schemaObject.anyOf)) return 'anyOf';

  if (Array.isArray(schemaObject.oneOf)) return 'oneOf';

  if (Array.isArray(schemaObject.enum)) return 'enum';

  if (schemaObject.type === 'array' || schemaObject.items) return 'array';

  if (schemaObject.type === 'string') return 'string';

  if (['number', 'integer'].includes(schemaObject.type as string)) return 'number';

  if (schemaObject.type === 'boolean') return 'boolean';

  return 'object';
};
