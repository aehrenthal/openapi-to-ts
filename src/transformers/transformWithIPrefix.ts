import {ITypeScriptInterface, ITypeScriptProperty} from '../types';

/**
 * A util method that transforms the value of a property
 * to append an I to exactly the right position.
 * @param property the property who's value needs transformation.
 */
const appendPrefixToPropertyValue = (property: ITypeScriptProperty): string => {
  switch (property.valueType) {
    case 'array':
    case 'ref':
    case 'allOf':
    case 'anyOf':
    case 'oneOf':
    case 'enum':
    case 'string':
    case 'number':
    case 'boolean':
    case 'object':
    default:
      return `I${property.value}`;
  }
};

/**
 * Transforms an array of TypeScript interfaces to have an `I`
 * as their prefixes. For example, the interface Cat becomes ICat.
 * @param interfaceObjects the interfaces to transform.
 */
export const transformWithIPrefix = (interfaceObjects: ITypeScriptInterface[]): ITypeScriptInterface[] => {
  return interfaceObjects.map((interfaceObject) => {
    return {
      ...interfaceObject,
      name: `I${interfaceObject.name}`,
      properties: interfaceObject.properties.map((property) => {
        return {
          ...property,
          /** Only append an I to interfaces, not types. */
          value: interfaceObjects.find((interfaceObject) => interfaceObject.name === property.value)
            ? appendPrefixToPropertyValue(property)
            : property.value
        };
      })
    };
  });
};
