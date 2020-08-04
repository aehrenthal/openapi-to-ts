import {IOpenAPIReferenceObject, IOpenAPISchemaObject, ITypeScriptProperty, SchemaObjectType} from '../types';
import {getSchemaObjectType, mapSchemaToTypeValue} from '../utils';
import {getSchemaNameFromRef} from '../utils/getSchemaNameFromRef';
import {isReferenceObject} from '../utils/isReferenceObject';
import {toCamelCase} from '../utils/toCamelCase';

/**
 * Converts a OpenAPI 3.0 property to TypeScript property object.
 * @param schemaObject the schema object to convert the properties of.
 * @param requiredProperties an array of required properties for the schema.
 * @param name the name of the property to be generated.
 */
export function generateTSProperty(
  schemaObject: IOpenAPISchemaObject | IOpenAPIReferenceObject,
  requiredProperties: string[] | undefined,
  name: string | null
): ITypeScriptProperty {
  let generatedProperty: ITypeScriptProperty;
  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);

  /**
   * Handle the property generation for the type IOpenAPIReferenceObject, since we need to compute the name.
   * $ref is not declared with a name itself. As such, we need to get the name from the $ref value.
   * For example, the name for $ref: `#/components/schemas/NewPet` would become `newPet`.
   * For the type IOpenAPISchemaObject, we can get the name from the JSON key.
   */
  if (isReferenceObject(schemaObject)) {
    /** Fallback to $ref name. */
    const propertyName = name || toCamelCase(getSchemaNameFromRef(schemaObject.$ref));
    generatedProperty = {
      name: propertyName,
      nullable: false,
      optional: !requiredProperties?.includes(propertyName),
      value: mapSchemaToTypeValue(schemaObject),
      valueType: schemaObjectType || 'string'
    };
  } else {
    /** Fall back to a generic map. */
    const propertyName = name || '[key: string]';
    generatedProperty = {
      name: propertyName,
      nullable: schemaObject.nullable || false,
      optional: !name ? false : !requiredProperties?.includes(propertyName),
      value: mapSchemaToTypeValue(schemaObject),
      valueType: schemaObjectType || 'string'
    };
  }

  return generatedProperty;
}
