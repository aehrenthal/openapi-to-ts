import {IOpenAPISchemaObject, ITypeScriptProperty, SchemaObjectType} from '../types';
import {convertName} from './convertName';
import {detectSchemaObjectType} from './detectSchemaObjectType';
import {getSchemaNameFromRef} from './getSchemaNameFromRef';

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
  let generatedProperty: ITypeScriptProperty = {
    name,
    nullable: schemaObject.nullable || false,
    optional: !requiredProperties || !requiredProperties.includes(name),
    type: ''
  };

  const schemaObjectType: SchemaObjectType | undefined = detectSchemaObjectType(schemaObject);

  switch (schemaObjectType) {
    case 'ref':
      generatedProperty.type += convertName(getSchemaNameFromRef(schemaObject.$ref));
      break;
    case 'anyOf':
    case 'oneOf':
    case 'enum':
    case 'array':
    case 'string':
    case 'number':
    case 'boolean':
      generatedProperty.type += schemaObjectType;
      break;
    case 'object':
    default:
      generatedProperty.type += schemaObject.type;
      break;
  }

  return generatedProperty;
};
