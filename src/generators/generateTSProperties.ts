import {IOpenAPIReferenceObject, IOpenAPISchemaObject, IOpenAPIToTSOptions, ITypeScriptProperty} from '../types';
import {isReferenceObject} from '../utils/isReferenceObject';
import {generateTSProperty} from './generateTSProperty';

/**
 * Converts all OpenAPI 3.0 properties to TypeScript property objects.
 * @param schemaObject the schema object to convert the properties of.
 * @param options optional options passed to openapi-to-ts.
 */
export const generateTSProperties = (
  schemaObject: IOpenAPISchemaObject,
  options: IOpenAPIToTSOptions | undefined
): ITypeScriptProperty[] => {
  let generatedProperties: ITypeScriptProperty[] = [];

  /**
   * Here we handle the various places where OpenAPI 3.0 properties can be defined in.
   * These range from schema.properties and schema.allOf to schema.oneOf and more.
   */

  if (schemaObject.properties) {
    for (const [key, value] of Object.entries(schemaObject.properties)) {
      generatedProperties.push(generateTSProperty(value, schemaObject.required, key, options));
    }
  }

  if (schemaObject.allOf || schemaObject.anyOf || schemaObject.oneOf) {
    (schemaObject.allOf || schemaObject.anyOf || schemaObject.oneOf || []).map(
      (nestedSchemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject) => {
        if (isReferenceObject(nestedSchemaObject)) {
          generatedProperties.push(generateTSProperty(nestedSchemaObject, schemaObject.required, null, options));
        } else {
          generatedProperties.push(
            generateTSProperty(nestedSchemaObject, schemaObject.required, nestedSchemaObject.title || null, options)
          );
        }
      }
    );
  }

  return generatedProperties;
};
