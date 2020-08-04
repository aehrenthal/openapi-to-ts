import {ITypeScriptInterface} from '../types';

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
          value: interfaceObjects.find((interfaceObject) => property.value.includes(interfaceObject.name))
            ? property.value.map((value) => `I${value}`)
            : property.value
        };
      })
    };
  });
};
