import {IOpenAPISchemaObject} from '../types';
import {convertComment} from './convertComment';
import {convertName} from './convertName';
import {convertProperty} from './convertProperty';

/**
 * Generates a TypeScript interface based on a OpenAPI 3.0 schema.
 * @param name the name of the schema.
 * @param schemaObject the schema object to convert.
 */
export const generateTSInterface = (name: string, schemaObject: IOpenAPISchemaObject): string => {
  let generatedInterface: string = '';

  /** Step 1: Generate the JSDoc comment above the interface being declared. */
  if (schemaObject.description) generatedInterface += convertComment(schemaObject.description);

  /** Step 2: Generate the export and name of the interface.  */
  generatedInterface += `export interface ${convertName(name)} {\n`;

  /** Step 3: Generate the properties of the interface. */
  if (schemaObject.properties) {
    for (const [key, value] of Object.entries(schemaObject.properties)) {
      if (!value.$ref) {
        /** Add two spaces before each property. */
        generatedInterface += '  ';
        /** Generate the actual TypeScript property. */
        generatedInterface += convertProperty(key, value, schemaObject.required);
        /** Add a new line after each property. */
        generatedInterface += '\n';
      }
    }
  }

  /** Step 4: Close the interface and add two line breaks. */
  generatedInterface += '}\n\n';

  return generatedInterface;
};
