/**
 * This interface represents the options the
 * openapi-to-ts package accepts to generate
 * TypeScript types based on OpenAPI files.
 */
export interface IOpenAPIToTSOptions {}

/**
 * The following OpenAPI 3.0 types are not nearly complete, given that
 * we don't need the complete list to generate proper TypeScript types.
 */

/**
 * The format type of a schema is defined by the `format` keyword, for example, format: byte.
 * This type defines all format types OpenAPI 3.0 allows.
 */
export type OpenAPIDataFormats =
  | 'float'
  | 'double'
  | 'int32'
  | 'int64'
  | 'date'
  | 'date-time'
  | 'password'
  | 'byte'
  | 'binary'
  | 'email'
  | 'uuid'
  | 'uri'
  | 'hostname'
  | 'ipv4'
  | 'ipv6';

/**
 * The data type of a schema is defined by the `type` keyword, for example, type: string.
 * This type defines all data types OpenAPI 3.0 allows.
 */
export type OpenAPIDataTypes = 'array' | 'string' | 'number' | 'integer' | 'boolean' | 'object';

/**
 * Each of the belows types are constructed differently by openapi-to-ts. This
 * type helps us to differentiate each of them and construct switch statements.
 */
export type SchemaObjectType =
  | 'ref'
  | 'anyOf'
  | 'oneOf'
  | 'enum'
  | 'array'
  | 'string'
  | 'number'
  | 'boolean'
  | 'object';

/**
 * This type represents a reference to another schema
 * defined in the OpenAPI file.
 */
export interface IOpenAPIReferenceObject {
  $ref?: string;
}

/**
 * This interface represents an OpenAPI schema object.
 * OpenAPI 3.0 data types are based on an extended subset
 * JSON Schema Specification Wright Draft 00. The data
 * types are described using a schema object.
 */
export interface IOpenAPISchemaObject {
  additionalProperties?: IOpenAPIReferenceObject | IOpenAPISchemaObject | boolean;
  allOf?: Array<IOpenAPIReferenceObject | IOpenAPISchemaObject>;
  anyOf?: Array<IOpenAPIReferenceObject | IOpenAPISchemaObject>;
  description?: string;
  enum?: string[];
  format?: OpenAPIDataFormats;
  items?: IOpenAPIReferenceObject | IOpenAPISchemaObject;
  nullable?: boolean;
  oneOf?: Array<IOpenAPIReferenceObject | IOpenAPISchemaObject>;
  properties?: {
    [key: string]: IOpenAPIReferenceObject | IOpenAPISchemaObject;
  };
  required?: string[];
  title?: string;
  type?: OpenAPIDataTypes;
  [key: string]: any;
}

/**
 * This interface describes the structure of an
 * OpenAPI 3.0 specification file.
 */
export interface IOpenAPISpecFile {
  openapi: string;
  info: {
    title?: string;
    description?: string;
    termsOfService?: string;
    contact?: {
      name?: string;
      url?: string;
      email?: string;
    };
    license?: {
      name?: string;
      url?: string;
    };
    version?: string;
  };
  components?: {
    schemas?: {
      [key: string]: IOpenAPIReferenceObject | IOpenAPISchemaObject;
    };
  };
}
