import {IOpenAPIReferenceObject, IOpenAPISchemaObject, ITypeScriptProperty} from '../types';
import {getSchemaNameFromRef} from './getSchemaNameFromRef';
import {isReferenceObject} from './isReferenceObject';
import {mapSchemaObjectToTypeScriptType} from './mapSchemaObjectToTypeScriptType';
import {toCamelCase} from './toCamelCase';

/**
 * Overload for a schemaObject of type IOpenAPIReferenceObject, since we need to compute the name.
 * $ref is not declared with a name itself. As such, we need to get the name from the $ref value.
 * For example, the name for $ref: `#/components/schemas/NewPet` would become `newPet`.
 */
export function generateTSProperty(
  schemaObject: IOpenAPIReferenceObject,
  requiredProperties?: string[]
): ITypeScriptProperty;

/**
 * Overload for a schemaObject of type IOpenAPISchemaObject, where we can get the name from the JSON key.
 */
export function generateTSProperty(
  schemaObject: IOpenAPISchemaObject,
  requiredProperties?: string[],
  name?: string
): ITypeScriptProperty;

/**
 * Converts a OpenAPI 3.0 property to TypeScript property object.
 * @param schemaObject the schema object to convert the properties of.
 * @param requiredProperties an array of required properties for the schema.
 * @param name the name of the property to be generated.
 */
export function generateTSProperty(
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject,
  requiredProperties?: string[],
  name?: string
): ITypeScriptProperty {
  let generatedProperty: ITypeScriptProperty;

  if (isReferenceObject(schemaObject)) {
    const propertyName = toCamelCase(getSchemaNameFromRef(schemaObject.$ref));
    generatedProperty = {
      name: propertyName,
      nullable: false,
      optional: !requiredProperties || !requiredProperties.includes(propertyName),
      type: mapSchemaObjectToTypeScriptType(schemaObject)
    };
  } else {
    /** Fall back to a generic map. */
    const propertyName = name || '[key: string]';
    generatedProperty = {
      name: propertyName,
      nullable: schemaObject.nullable || false,
      optional: !name ? false : !requiredProperties || !requiredProperties.includes(propertyName),
      type: mapSchemaObjectToTypeScriptType(schemaObject)
    };
  }

  return generatedProperty;
}
