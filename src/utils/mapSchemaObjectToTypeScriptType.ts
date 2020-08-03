import {IOpenAPIReferenceObject, IOpenAPISchemaObject, SchemaObjectType} from '../types';
import {getInterfaceNameFromRef} from './getInterfaceNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {isReferenceObject} from './isReferenceObject';
import {toTSUnion} from './toTSUnion';

/**
 * Maps the SchemaObjectType to the TypeScript type.
 * @param schemaObject the schema object to map.
 */
export const mapSchemaObjectToTypeScriptType = (
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject
): string => {
  const fallbackType: string = 'any';
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);

  switch (schemaObjectType) {
    case 'ref':
      return getInterfaceNameFromRef(schemaObject.$ref);
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
          ? getInterfaceNameFromRef(schemaObject.$ref)
          : schemaObject.items
          ? mapSchemaObjectToTypeScriptType(schemaObject.items)
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
