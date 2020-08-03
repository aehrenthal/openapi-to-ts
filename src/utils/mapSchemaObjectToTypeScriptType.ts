import {IOpenAPIReferenceObject, IOpenAPISchemaObject, SchemaObjectType} from '../types';
import {getInterfaceNameFromRef} from './getInterfaceNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {isReferenceObject} from './isReferenceObject';

/**
 * Maps the SchemaObjectType to the TypeScript type.
 * @param schemaObject the schema object to map.
 */
export const mapSchemaObjectToTypeScriptType = (
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject
): string => {
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);

  switch (schemaObjectType) {
    case 'ref':
      return getInterfaceNameFromRef(schemaObject.$ref);
    case 'allOf': // TODO: Support allOf
    case 'anyOf': // TODO: Support anyOf
    case 'oneOf': // TODO: Support oneOf
    case 'enum': // TODO: Support ENUM
    case 'array':
      return `Array<${
        isReferenceObject(schemaObject)
          ? getInterfaceNameFromRef(schemaObject.$ref)
          : schemaObject.items
          ? mapSchemaObjectToTypeScriptType(schemaObject.items)
          : 'any'
      }>`;
    case 'string':
    case 'number':
    case 'boolean':
      return schemaObjectType;
    case 'object':
    default:
      return 'any';
  }
};
