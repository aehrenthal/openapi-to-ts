import {ITypeScriptProperty} from '../types';

/**
 * Converts a TypeScript property object to a string.
 * @param propertyObject the TypeScript property to convert to a string.
 */
export const convertTSPropertyToString = (propertyObject: ITypeScriptProperty): string => {
  let propertyString: string = '';

  /** Step 1: Add the name to the property. */
  propertyString += propertyObject.name;

  /** Step 2: Conditionally mark the property as optional. */
  if (propertyObject.optional) propertyString += '?';

  /** Step 3: Append the appropriate separator between the key and the type. */
  propertyString += ': ';

  /** Step 4: Add the proper type to the property. */
  propertyString += propertyObject.type;

  /** Step 5: Conditionally mark the property as nullable. */
  if (propertyObject.nullable) propertyString += ' | null';

  /** Step 6: Close the property definition with a semicolon. */
  propertyString += ';';

  return propertyString;
};