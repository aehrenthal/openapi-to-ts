import {IOpenAPIReferenceObject, IOpenAPISchemaObject, IOpenAPIToTSOptions, SchemaObjectType} from '../types';
import {getGenerationGoal} from './getGenerationGoal';
import {getInterfaceNameFromRef} from './getInterfaceNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {getTypeNameFromRef} from './getTypeNameFromRef';
import {isReferenceObject} from './isReferenceObject';
import {toTSIntersection} from './toTSIntersection';
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
    case 'ref': {
      if (getGenerationGoal(schemaObject) === 'INTERFACE') {
        return getInterfaceNameFromRef(schemaObject.$ref, options?.prefixWithI);
      }
      return getTypeNameFromRef(schemaObject.$ref);
    }
    case 'allOf': {
      const allOf = (schemaObject as IOpenAPISchemaObject).allOf;
      return allOf
        ? toTSIntersection(allOf.map((allOf) => `${mapSchemaObjectToTypeScriptType(allOf, options)}`))
        : fallbackType;
    }
    case 'anyOf': {
      const anyOf = (schemaObject as IOpenAPISchemaObject).anyOf;
      return anyOf
        ? toTSIntersection(anyOf.map((anyOf) => `Partial<${mapSchemaObjectToTypeScriptType(anyOf, options)}>`))
        : fallbackType;
    }
    case 'oneOf': {
      const oneOf = (schemaObject as IOpenAPISchemaObject).oneOf;
      return oneOf ? toTSUnion(oneOf.map((oneOf) => mapSchemaObjectToTypeScriptType(oneOf, options))) : fallbackType;
    }
    case 'enum': {
      const enums = (schemaObject as IOpenAPISchemaObject).enum;
      return enums ? toTSUnion(enums.map((enumString: string) => `'${enumString}'`)) : fallbackType;
    }
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
