import {IOpenAPISchemaObject, ITypeScriptProperty} from '../types';
import {detectSchemaObjectType} from './detectSchemaObjectType';

/**
 * Converts a OpenAPI 3.0 property to TypeScript property object.
 * @param name the name of the property to be generated.
 * @param schemaObject the schema object to convert the properties of.
 * @param requiredProperties an array of required properties for the schema.
 */
export const generateTSProperty = (
  name: string,
  schemaObject: IOpenAPISchemaObject,
  requiredProperties?: string[]
): ITypeScriptProperty => {
  return {
    name,
    nullable: schemaObject.nullable || false,
    optional: !requiredProperties || !requiredProperties.includes(name),
    type: detectSchemaObjectType(schemaObject) as string
  };
};
