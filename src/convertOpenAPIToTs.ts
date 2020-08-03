import {IOpenAPISpecFile, IOpenAPIToTSOptions, ITypeScriptInterface} from './types';
import {convertTSInterfaceToString, generateTSInterface} from './utils';

/**
 * Converts an OpenAPI 3.0 Specification File to TypeScript types.
 * @param specFile the path to the OpenAPI 3.0 specification file to convert.
 * @param _options optional options passed to openapi-to-ts.
 */
export const convertOpenAPIToTS = (specFile: IOpenAPISpecFile, _options?: IOpenAPIToTSOptions): string => {
  if (!specFile.components || !specFile.components.schemas) {
    throw new Error(
      'The components section of the OpenAPI 3.0 is empty. For more information please visit https://swagger.io/docs/specification/components/.'
    );
  }

  /** Map through all schemas and generate the proper interfaces. */
  let interfaceObjects: ITypeScriptInterface[] = [];
  for (const [key, value] of Object.entries(specFile.components.schemas)) {
    interfaceObjects.push(generateTSInterface(key, value));
  }

  /** Convert these interfaces to strings that can be written to an ouput file. */
  let interfacesString: string = '';
  interfaceObjects.map((interfaceObject: ITypeScriptInterface) => {
    /** Actually convert the TypeScript interface to a string. */
    interfacesString += convertTSInterfaceToString(interfaceObject);

    /** Add a linebreak between each interface. */
    interfacesString += '\n\n';
  });
  return interfacesString;
};
