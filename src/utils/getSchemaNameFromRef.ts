/**
 * Takes an OpenAPI $ref value and returns the name of the schema.
 * For example, `#/components/schemas/new_pet` becomes `new_pet`.
 * @param ref the value of the ref, such as `#/components/schemas/new_pet`.
 */
export const getSchemaNameFromRef = (ref: string | undefined): string => {
  if (!ref) return '';
  return ref.slice(ref.lastIndexOf('/') + 1);
};
