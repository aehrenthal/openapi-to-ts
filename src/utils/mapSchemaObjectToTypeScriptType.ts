import {IOpenAPIReferenceObject, IOpenAPISchemaObject, IOpenAPIToTSOptions, SchemaObjectType} from '../types';
import {getInterfaceNameFromRef} from './getInterfaceNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {isReferenceObject} from './isReferenceObject';
import {toTSUnion} from './toTSUnion';

/**
 * Maps the SchemaObjectType to the TypeScript type.
 * @param schemaObject the schema object to map.
 * @param options optional options passed to openapi-to-ts.
 */
export const mapSchemaObjectToTypeScriptType = (
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject,
  options: IOpenAPIToTSOptions | undefined
): string => {
  const fallbackType: string = 'any';
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);

  switch (schemaObjectType) {
    case 'ref':
      return getInterfaceNameFromRef(schemaObject.$ref, options?.prefixWithI);
    case 'allOf': // TODO: Support allOf
    case 'anyOf': // TODO: Support anyOf
    case 'oneOf': // TODO: Support oneOf
    case 'enum':
      return isReferenceObject(schemaObject)
        ? fallbackType
        : schemaObject.enum
        ? toTSUnion(schemaObject.enum.map((enumString: string) => enumString))
        : fallbackType;
    case 'array':
      return `Array<${
        isReferenceObject(schemaObject)
          ? getInterfaceNameFromRef(schemaObject.$ref, options?.prefixWithI)
          : schemaObject.items
          ? mapSchemaObjectToTypeScriptType(schemaObject.items, options)
          : fallbackType
      }>`;
    case 'string':
    case 'number':
    case 'boolean':
      return schemaObjectType || fallbackType;
    case 'object':
    default:
      return fallbackType;
  }
};
