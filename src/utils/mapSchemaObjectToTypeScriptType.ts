import {IOpenAPIReferenceObject, IOpenAPISchemaObject, SchemaObjectType} from '../types';
import {getNameFromRef} from './getNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {isReferenceObject} from './isReferenceObject';
import {toTSIntersection} from './toTSIntersection';
import {toTSUnion} from './toTSUnion';

/**
 * Maps the SchemaObjectType to the TypeScript type.
 * @param schemaObject the schema object to map.
 */
export const mapSchemaObjectToTypeScriptType = (
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject
): string => {
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);
  const fallbackType: string = 'any';

  switch (schemaObjectType) {
    case 'ref':
      return getNameFromRef(schemaObject.$ref);
    case 'allOf': {
      const allOf = (schemaObject as IOpenAPISchemaObject).allOf;
      return allOf ? toTSIntersection(allOf.map((allOf) => `${mapSchemaObjectToTypeScriptType(allOf)}`)) : fallbackType;
    }
    case 'anyOf': {
      const anyOf = (schemaObject as IOpenAPISchemaObject).anyOf;
      return anyOf
        ? toTSIntersection(anyOf.map((anyOf) => `Partial<${mapSchemaObjectToTypeScriptType(anyOf)}>`))
        : fallbackType;
    }
    case 'oneOf': {
      const oneOf = (schemaObject as IOpenAPISchemaObject).oneOf;
      return oneOf ? toTSUnion(oneOf.map((oneOf) => mapSchemaObjectToTypeScriptType(oneOf))) : fallbackType;
    }
    case 'enum': {
      const enums = (schemaObject as IOpenAPISchemaObject).enum;
      return enums ? toTSUnion(enums.map((enumString: string) => `'${enumString}'`)) : fallbackType;
    }
    case 'array':
      return `Array<${
        isReferenceObject(schemaObject)
          ? getNameFromRef(schemaObject.$ref)
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
