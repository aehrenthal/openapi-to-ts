import {IOpenAPISpecFile, IOpenAPIToTSOptions} from './types';

/**
 * Converts an OpenAPI 3.0 Specification File to TypeScript types.
 * @param specFile the path to the OpenAPI 3.0 specification file to convert.
 * @param options optional options passed to openapi-to-ts.
 */
export const convertOpenAPIToTS = (specFile: IOpenAPISpecFile, options?: IOpenAPIToTSOptions) => {
  console.log(specFile);
  console.log(options);
  console.log('test');
};
