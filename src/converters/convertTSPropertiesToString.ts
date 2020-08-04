import {ITypeScriptProperty} from '../types';
import {convertTSPropertyToString} from './convertTSPropertyToString';

/**
 * Converts an array of TypeScript property objects to a string.
 * @param propertyObjects the TypeScript properties to convert to a string.
 */
export const convertTSPropertiesToString = (propertyObjects: ITypeScriptProperty[]): string => {
  let propertiesString = '';

  propertyObjects.map((propertyObject: ITypeScriptProperty) => {
    /** Add two spaces before each property. */
    propertiesString += '  ';

    /** Actually convert the TypeScript property to a string. */
    propertiesString += convertTSPropertyToString(propertyObject);

    /** Add a linebreak after each property. */
    propertiesString += '\n';
  });

  return propertiesString;
};
