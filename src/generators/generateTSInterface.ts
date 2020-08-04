import {IOpenAPISchemaObject, IOpenAPIToTSOptions, ITypeScriptInterface} from '../types';
import {generateTSProperties} from './generateTSProperties';

/**
 * Generates a TypeScript interface object based on a OpenAPI 3.0 schema.
 * @param name the name of the schema.
 * @param schemaObject the schema object to convert.
 * @param options optional options passed to openapi-to-ts.
 */
export const generateTSInterface = (
  name: string,
  schemaObject: IOpenAPISchemaObject,
  options: IOpenAPIToTSOptions | undefined
): ITypeScriptInterface => {
  return {
    name,
    comment: schemaObject.description,
    properties: generateTSProperties(schemaObject, options)
  };
};
