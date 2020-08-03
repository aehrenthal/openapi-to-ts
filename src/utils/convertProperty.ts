import {IOpenAPISchemaObject, SchemaObjectType} from '../types';
import {convertName} from './convertName';
import {detectSchemaObjectType} from './detectSchemaObjectType';

/**
 * Converts an OpenAPI 3.0 property to a TypeScript property.
 * @param name the name of the property.
 * @param schemaObject the schema object of the property.
 * @param requiredProperties the required properties of the parent schema.
 */
export const convertProperty = (
  name: string,
  schemaObject: IOpenAPISchemaObject,
  requiredProperties?: string[]
): string => {
  let generatedProperty: string = '';

  /** Step 1: Add the name to the property. */
  generatedProperty += name;

  /** Step 2: Conditionally mark the property as optional with `?`. */
  if (!requiredProperties || !requiredProperties.includes(name)) generatedProperty += '?';

  /** Step 3: Append the appropriate separator between the key and the type. */
  generatedProperty += ': ';

  /** Step 4: Add the proper type to the property. */
  const schemaObjectType: SchemaObjectType | undefined = detectSchemaObjectType(schemaObject);
  switch (schemaObjectType) {
    case 'ref':
      generatedProperty += convertName(schemaObject.$ref);
      break;
    case 'anyOf':
    case 'oneOf':
    case 'enum':
    case 'array':
    case 'string':
    case 'number':
    case 'boolean':
      generatedProperty += schemaObjectType;
      break;
    case 'object':
    default:
      generatedProperty += schemaObject.type;
      break;
  }

  /** Step 5: Conditionally mark the property as nullable. */
  if (schemaObject.nullable) generatedProperty += ' | null';

  /** Step 6: Close the property definition with a semicolon. */
  generatedProperty += ';';

  return generatedProperty;
};
