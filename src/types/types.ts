/**
 * This interface represents the options the
 * openapi-to-ts package accepts to generate
 * TypeScript types based on OpenAPI files.
 */
export interface IOpenAPIToTsOptions {
  /**
   * Specifies the OpenAPI 3.0 specification file
   * which should be converted to TypeScript types.
   */
  input: string;

  /**
   * Specifies the output file the TypeScript types
   * should be written to.
   */
  output: string;
}

/**
 * The following OpenAPI 3.0 types are not nearly complete, given that
 * we don't need the complete list to generate proper TypeScript types.
 */

/**
 * The data type of a schema is defined by the type keyword, for example, type: string.
 * This type defines all data types OpenAPI 3.0 allows.
 */
export type OpenAPIDataTypes = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object';

/**
 * This type represents a reference to another schema
 * defined in the OpenAPI file.
 */
export type OpenAPISchemaReference =
  | {$ref: string}
  | {anyOf: (IOpenAPISchemaObject | OpenAPISchemaReference)[]}
  | {oneOf: (IOpenAPISchemaObject | OpenAPISchemaReference)[]};

/**
 * This interface represents an OpenAPI schema object.
 * OpenAPI 3.0 data types are based on an extended subset
 * JSON Schema Specification Wright Draft 00. The data
 * types are described using a schema object.
 */
export interface IOpenAPISchemaObject {
  additionalProperties?: OpenAPISchemaReference | IOpenAPISchemaObject | boolean;
  allOf?: Array<OpenAPISchemaReference | IOpenAPISchemaObject>;
  description?: string;
  enum?: string[];
  items?: OpenAPISchemaReference | IOpenAPISchemaObject;
  nullable?: boolean;
  oneOf?: Array<OpenAPISchemaReference | IOpenAPISchemaObject>;
  properties?: {
    [key: string]: OpenAPISchemaReference | IOpenAPISchemaObject;
  };
  required?: string[];
  title?: string;
  type?: OpenAPISchemaReference;
  [key: string]: any;
}

/**
 * This interface describes the structure of an
 * OpenAPI 3.0 specification file.
 */
export interface IOpenAPISpecificationFile {
  openapi: string;
  info: {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
    };
    license?: {
      name: string;
      url?: string;
    };
    version: string;
  };
  components: {
    schemas: {
      [key: string]: OpenAPISchemaReference | IOpenAPISchemaObject;
    };
  };
}
