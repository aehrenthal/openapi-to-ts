import {convertTSInterfaceToString, convertTSTypeToString} from './converters';
import {generateTSInterface} from './generators';
import {generateTSType} from './generators/generateTSType';
import {IOpenAPISpecFile, IOpenAPIToTSOptions, ITypeScriptInterface, ITypeScriptType} from './types';
import {getGenerationGoal} from './utils/getGenerationGoal';

/**
 * Converts an OpenAPI 3.0 Specification File to TypeScript types.
 * @param specFile the path to the OpenAPI 3.0 specification file to convert.
 * @param options optional options passed to openapi-to-ts.
 */
export const convertOpenAPIToTS = (specFile: IOpenAPISpecFile, options?: IOpenAPIToTSOptions): string => {
  if (!specFile.components || !specFile.components.schemas) {
    throw new Error(
      'The components section of the OpenAPI 3.0 is empty. For more information please visit https://swagger.io/docs/specification/components/.'
    );
  }

  /** Map through all schemas and generate the proper interfaces and types. */
  let interfaceObjects: ITypeScriptInterface[] = [];
  let typeObjects: ITypeScriptType[] = [];
  for (const [key, value] of Object.entries(specFile.components.schemas)) {
    /** Either generate an interface or a type based on the schema and its generation goal. */
    if (getGenerationGoal(value) === 'INTERFACE') {
      interfaceObjects.push(generateTSInterface(key, value, options));
    } else {
      typeObjects.push(generateTSType(key, value, options));
    }
  }

  /** Convert these interfaces to strings that can be written to an ouput file. */
  let types: string = '';
  interfaceObjects.map((interfaceObject) => {
    /** Actually convert the TypeScript interface to a string. */
    types += convertTSInterfaceToString(interfaceObject, options);

    /** Add a linebreak between each interface. */
    types += '\n\n';
  });

  /** Convert these types to strings that can be written to an ouput file. */
  typeObjects.map((typeObject) => {
    /** Actually convert the TypeScript type to a string. */
    types += convertTSTypeToString(typeObject);

    /** Add a linebreak between each interface. */
    types += '\n\n';
  });

  return types;
};
