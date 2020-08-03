import {IOpenAPIReferenceObject, IOpenAPISchemaObject, ITypeScriptProperty, SchemaObjectType} from '../types';
import {getSchemaNameFromRef} from './getSchemaNameFromRef';
import {getSchemaObjectType} from './getSchemaObjectType';
import {isReferenceObject} from './isReferenceObject';
import {toCamelCase} from './toCamelCase';
import {toInterfaceName} from './toInterfaceName';

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
 *  @param name the name of the property to be generated.
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
      type: ''
    };
  } else {
    const propertyName = name || '';
    generatedProperty = {
      name: propertyName,
      nullable: schemaObject.nullable || false,
      optional: !requiredProperties || !requiredProperties.includes(propertyName),
      type: ''
    };
  }

  const schemaObjectType: SchemaObjectType | undefined = getSchemaObjectType(schemaObject);

  switch (schemaObjectType) {
    case 'ref':
      generatedProperty.type = toInterfaceName(getSchemaNameFromRef(schemaObject.$ref));
      break;
    case 'allOf': // TODO: Support allOf
    case 'anyOf': // TODO: Support anyOf
    case 'oneOf': // TODO: Support oneOf
    case 'enum': // TODO: Support ENUM
    case 'array': // TODO: Support array
    case 'string':
    case 'number':
    case 'boolean':
      generatedProperty.type = schemaObjectType;
      break;
    case 'object':
    default:
      /** Fall back to a generic map. */
      generatedProperty.name = '[key: string]';
      generatedProperty.type = 'any';
      break;
  }

  return generatedProperty;
}
