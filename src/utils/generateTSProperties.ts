import {IOpenAPISchemaObject, ITypeScriptProperty} from '../types';
import {generateTSProperty} from './generateTSProperty';
import {getSchemaNameFromRef} from './getSchemaNameFromRef';
import {isReferenceObject} from './isReferenceObject';
import {toCamelCase} from './toCamelCase';

/**
 * Converts all OpenAPI 3.0 properties to TypeScript property objects.
 * @param schemaObject the schema object to convert the properties of.
 */
export const generateTSProperties = (schemaObject: IOpenAPISchemaObject): ITypeScriptProperty[] => {
  let generatedProperties: ITypeScriptProperty[] = [];

  if (schemaObject.properties) {
    for (const [key, value] of Object.entries(schemaObject.properties)) {
      /**
       * $ref is not declared with a name itself. We need to get the name from the $ref value itself.
       * For example, the name for $ref: `#/components/schemas/NewPet` would become `newPet`.
       */
      const propertyName: string = isReferenceObject(value) ? toCamelCase(getSchemaNameFromRef(value.$ref)) : key;
      generatedProperties.push(generateTSProperty(propertyName, value, schemaObject.required));
    }
  }

  // TODO: Handle allOf, oneOf etc.

  return generatedProperties;
};
