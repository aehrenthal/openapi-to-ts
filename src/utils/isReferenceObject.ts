import {IOpenAPIReferenceObject, IOpenAPISchemaObject} from '../types';

/**
 * A type guard to check if a schema object is of type IOpenAPIReferenceObject/
 * @param schemaObject the schema object to check.
 */
export const isReferenceObject = (
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject
): schemaObject is IOpenAPIReferenceObject => {
  return (schemaObject as IOpenAPIReferenceObject).$ref !== undefined;
};
