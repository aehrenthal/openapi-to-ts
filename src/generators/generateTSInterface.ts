import {IOpenAPISchemaObject, ITypeScriptInterface} from '../types';
import {generateTSProperties} from './generateTSProperties';

/**
 * Generates a TypeScript interface object based on a OpenAPI 3.0 schema.
 * @param name the name of the schema.
 * @param schemaObject the schema object to convert.
 */
export const generateTSInterface = (name: string, schemaObject: IOpenAPISchemaObject): ITypeScriptInterface => {
  return {
    name,
    comment: schemaObject.description,
    properties: generateTSProperties(schemaObject)
  };
};
