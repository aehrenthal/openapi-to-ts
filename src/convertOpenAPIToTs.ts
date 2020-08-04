import {convertTSInterfaceToString, convertTSTypeToString} from './converters';
import {generateTSInterface} from './generators';
import {generateTSType} from './generators/generateTSType';
import {transformWithIPrefix} from './transformers';
import {IOpenAPISpecFile, IOpenAPIToTSOptions, ITypeScriptInterface, ITypeScriptType} from './types';
import {addWarning} from './utils';
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

  /** Run all generators to generate all interfaces and types. */
  let interfaceObjects: ITypeScriptInterface[] = [];
  let typeObjects: ITypeScriptType[] = [];
  for (const [key, value] of Object.entries(specFile.components.schemas)) {
    /** Either generate an interface or a type based on the schema and its generation goal. */
    if (getGenerationGoal(value) === 'INTERFACE') {
      interfaceObjects.push(generateTSInterface(key, value));
    } else {
      typeObjects.push(generateTSType(key, value));
    }
  }

  /** Run all optional transfomers to modify the interfaces and types. */
  if (options?.prefixWithI) interfaceObjects = transformWithIPrefix(interfaceObjects);

  /** Run all converters to convert the arrays of interfaces and types to writeable strings. */
  let types: string = '';

  /** Add a warning at the top of the output file. */
  types += addWarning();

  interfaceObjects.map((interfaceObject) => {
    /** Actually convert the TypeScript interface to a string. */
    types += convertTSInterfaceToString(interfaceObject);

    /** Add a linebreak between each interface. */
    types += '\n\n';
  });

  typeObjects.map((typeObject) => {
    /** Actually convert the TypeScript type to a string. */
    types += convertTSTypeToString(typeObject);

    /** Add a linebreak between each interface. */
    types += '\n\n';
  });

  return types;
};
