import {IOpenAPIReferenceObject, IOpenAPISchemaObject, SchemaObjectType} from '../types';
import {getNameFromRef} from './getNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {isReferenceObject} from './isReferenceObject';

/**
 * Maps the schema value based on its object type to an internally used type value.
 * For example, a schema of type `array` might return ['apple', 'bananas'].
 * @param schemaObject the schema object to map.
 */
export const mapSchemaToTypeValue = (schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject): string[] => {
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);
  const fallbackType = ['any'];

  switch (schemaObjectType) {
    case 'ref':
      return [getNameFromRef(schemaObject.$ref)];
    case 'allOf': {
      const allOf = (schemaObject as IOpenAPISchemaObject).allOf;
      return allOf ? allOf.map((allOf) => `${mapSchemaToTypeValue(allOf)}`) : fallbackType;
    }
    case 'anyOf': {
      const anyOf = (schemaObject as IOpenAPISchemaObject).anyOf;
      return anyOf ? anyOf.map((allOf) => `${mapSchemaToTypeValue(allOf)}`) : fallbackType;
    }
    case 'oneOf': {
      const oneOf = (schemaObject as IOpenAPISchemaObject).oneOf;
      return oneOf ? oneOf.map((oneOf) => `${mapSchemaToTypeValue(oneOf)}`) : fallbackType;
    }
    case 'enum': {
      const enums = (schemaObject as IOpenAPISchemaObject).enum;
      return enums ? enums.map((enumString) => `'${enumString}'`) : fallbackType;
    }
    case 'array':
      return isReferenceObject(schemaObject)
        ? [getNameFromRef(schemaObject.$ref)]
        : schemaObject.items
        ? mapSchemaToTypeValue(schemaObject.items)
        : fallbackType;
    case 'string':
    case 'number':
    case 'boolean':
      return [schemaObjectType] || fallbackType;
    case 'object':
    default:
      return fallbackType;
  }
};
