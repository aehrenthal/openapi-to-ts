import {IOpenAPISchemaObject, ITypeScriptProperty} from '../types';
import {generateTSProperty} from './generateTSProperty';

/**
 * Converts all OpenAPI 3.0 properties to TypeScript property objects.
 * @param schemaObject the schema object to convert the properties of.
 */
export const generateTSProperties = (schemaObject: IOpenAPISchemaObject): ITypeScriptProperty[] => {
  let generatedProperties: ITypeScriptProperty[] = [];

  if (schemaObject.properties) {
    for (const [key, value] of Object.entries(schemaObject.properties)) {
      generatedProperties.push(generateTSProperty(key, value, schemaObject.required));
    }
  }

  // TODO: Handle allOf, ref, oneOf etc.

  return generatedProperties;
};
