import {ITypeScriptInterface} from '../types';
import {convertTSPropertiesToString} from './convertTSPropertiesToString';
import {toInterfaceName} from './toInterfaceName';
import {toJSDocComment} from './toJSDocComment';

/**
 * Converts a TypeScript interface object to a string.
 * @param interfaceObject the TypeScript interface to convert to a string.
 */
export const convertTSInterfaceToString = (interfaceObject: ITypeScriptInterface): string => {
  let interfaceString: string = '';

  /** Step 1: Write the JSDoc comment above the interface being declared. */
  if (interfaceObject.comment) interfaceString += toJSDocComment(interfaceObject.comment);

  /** Step 2: Write the export and name of the interface. */
  interfaceString += `export interface ${toInterfaceName(interfaceObject.name)} {\n`;

  /** Step 3: Write the properties of the interface. */
  interfaceString += convertTSPropertiesToString(interfaceObject.properties);

  /** Step 4: Write the interface closure. */
  interfaceString += '}';

  return interfaceString;
};
