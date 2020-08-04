/**
 * Converts a string array to a TypeScript array type.
 * For example, ['A', 'B', 'C'] becomes Array<'A' | 'B' | 'C'>
 * @param types the type array to convert.
 */
export const toTSArray = (types: string[]): string => {
  return `Array<${types.join(` | `)}>`;
};
