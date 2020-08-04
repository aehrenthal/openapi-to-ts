import {ITypeScriptType} from '../types';
import {mapTypeValueToString, toPascalCase} from '../utils';
import {toJSDocComment} from '../utils/toJSDocComment';

/**
 * Converts a TypeScript type object to a string.
 * @param typeObject the TypeScript type to convert to a string.
 */
export const convertTSTypeToString = (typeObject: ITypeScriptType): string => {
  let typeString: string = '';

  /** Step 1: Write the JSDoc comment above the type being declared. */
  if (typeObject.comment) typeString += toJSDocComment(typeObject.comment);

  /** Step 2: Write the export and name of the type. */
  typeString += `export type ${toPascalCase(typeObject.name)} = `;

  /** Step 3: Write the proper value to the type by converting it to a string */
  typeString += mapTypeValueToString(typeObject.value, typeObject.valueType);

  /** Step 4: Write the type closure. */
  typeString += ';';

  return typeString;
};
