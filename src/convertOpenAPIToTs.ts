import {IOpenAPISpecFile, IOpenAPIToTSOptions} from './types';
import {generateTSInterface} from './utils';

/**
 * Converts an OpenAPI 3.0 Specification File to TypeScript types.
 * @param specFile the path to the OpenAPI 3.0 specification file to convert.
 * @param _options optional options passed to openapi-to-ts.
 */
export const convertOpenAPIToTS = (specFile: IOpenAPISpecFile, _options?: IOpenAPIToTSOptions) => {
  if (!specFile.components || !specFile.components.schemas) {
    throw new Error(
      'The components section of the OpenAPI 3.0 is empty. For more information please visit https://swagger.io/docs/specification/components/.'
    );
  }

  /** Map through all schemas and generate the proper interfaces. */
  let types: string = '';
  for (const [key, value] of Object.entries(specFile.components.schemas)) {
    types += generateTSInterface(key, value);
  }

  return types;
};
