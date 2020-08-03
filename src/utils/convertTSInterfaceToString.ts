import {ITypeScriptInterface} from '../types';
import {convertComment} from './convertComment';
import {convertName} from './convertName';
import {convertTSPropertiesToString} from './convertTSPropertiesToString';

/**
 * Converts a TypeScript interface object to a string.
 * @param interfaceObject the TypeScript interface to convert to a string.
 */
export const convertTSInterfaceToString = (interfaceObject: ITypeScriptInterface): string => {
  let interfaceString: string = '';

  /** Step 1: Write the JSDoc comment above the interface being declared. */
  if (interfaceObject.comment) interfaceString += convertComment(interfaceObject.comment);

  /** Step 2: Write the export and name of the interface. */
  interfaceString += `export interface ${convertName(interfaceObject.name)} {\n`;

  /** Step 3: Write the properties of the interface. */
  interfaceString += convertTSPropertiesToString(interfaceObject.properties);

  /** Step 4: Write the interface closure. */
  interfaceString += '}';

  return interfaceString;
};
