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
  /**
   * The exact version of the OpenAPI specification.
   */
  openapi: string;

  /**
   * The components section defines common data structures
   * used in an API. The nested schemas defined here will
   * be used to generate the TypeScript interfaces.
   */
  components: {
    schemas: {
      [key: string]: OpenAPISchemaReference | IOpenAPISchemaObject;
    };
  };
}
