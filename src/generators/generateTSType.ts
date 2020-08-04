import {IOpenAPISchemaObject, ITypeScriptType, SchemaObjectType} from '../types';
import {getSchemaObjectType, mapSchemaToTypeValue} from '../utils';

/**
 * Generates a TypeScript type object based on a OpenAPI 3.0 schema.
 * @param name the name of the schema.
 * @param schemaObject the schema object to convert.
 */
export const generateTSType = (name: string, schemaObject: IOpenAPISchemaObject): ITypeScriptType => {
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);

  return {
    name,
    comment: schemaObject.description,
    value: mapSchemaToTypeValue(schemaObject),
    valueType: schemaObjectType || 'string'
  };
};
