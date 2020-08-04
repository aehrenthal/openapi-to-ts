import {IOpenAPISchemaObject} from '../types';

/**
 * Checks based on an OpenAPI 3.0 schema object if we should generate
 * a TypeScript interface or type. Generally we generate interfaces,
 * however in certain edge cases we need to generate a type instead.
 * This is done to avoid generating empty interfaces.
 * @param schemaObject the schema object to check.
 */
export const getGenerationGoal = (schemaObject: IOpenAPISchemaObject): 'INTERFACE' | 'TYPE' => {
  if (schemaObject.properties || schemaObject.allOf || schemaObject.anyOf || schemaObject.oneOf) {
    return 'INTERFACE';
  }
  return 'TYPE';
};
