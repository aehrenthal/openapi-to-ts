import {IOpenAPIReferenceObject, IOpenAPISchemaObject, IOpenAPIToTSOptions, ITypeScriptProperty} from '../types';
import {getSchemaNameFromRef} from './getSchemaNameFromRef';
import {isReferenceObject} from './isReferenceObject';
import {mapSchemaObjectToTypeScriptType} from './mapSchemaObjectToTypeScriptType';
import {toCamelCase} from './toCamelCase';

/**
 * Converts a OpenAPI 3.0 property to TypeScript property object.
 * @param schemaObject the schema object to convert the properties of.
 * @param requiredProperties an array of required properties for the schema.
 * @param name the name of the property to be generated.
 * @param options optional options passed to openapi-to-ts.
 */
export function generateTSProperty(
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject,
  requiredProperties: string[] | undefined,
  name: string | null,
  options: IOpenAPIToTSOptions | undefined
): ITypeScriptProperty {
  let generatedProperty: ITypeScriptProperty;

  /**
   * Handle the property generation for the type IOpenAPIReferenceObject, since we need to compute the name.
   * $ref is not declared with a name itself. As such, we need to get the name from the $ref value.
   * For example, the name for $ref: `#/components/schemas/NewPet` would become `newPet`.
   * For the type IOpenAPISchemaObject, we can get the name from the JSON key.
   */
  if (isReferenceObject(schemaObject)) {
    const propertyName = toCamelCase(getSchemaNameFromRef(schemaObject.$ref));
    generatedProperty = {
      name: propertyName,
      nullable: false,
      optional: !requiredProperties?.includes(propertyName),
      type: mapSchemaObjectToTypeScriptType(schemaObject, options)
    };
  } else {
    /** Fall back to a generic map. */
    const propertyName = name || '[key: string]';
    generatedProperty = {
      name: propertyName,
      nullable: schemaObject.nullable || false,
      optional: !name ? false : !requiredProperties?.includes(propertyName),
      type: mapSchemaObjectToTypeScriptType(schemaObject, options)
    };
  }

  return generatedProperty;
}
