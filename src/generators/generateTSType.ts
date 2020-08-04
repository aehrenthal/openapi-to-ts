import {IOpenAPISchemaObject, IOpenAPIToTSOptions, ITypeScriptType} from '../types';
import {mapSchemaObjectToTypeScriptType} from '../utils';

/**
 * Generates a TypeScript type object based on a OpenAPI 3.0 schema.
 * @param name the name of the schema.
 * @param schemaObject the schema object to convert.
 * @param options optional options passed to openapi-to-ts.
 */
export const generateTSType = (
  name: string,
  schemaObject: IOpenAPISchemaObject,
  options: IOpenAPIToTSOptions | undefined
): ITypeScriptType => {
  return {
    name,
    comment: schemaObject.description,
    type: mapSchemaObjectToTypeScriptType(schemaObject, options)
  };
};
