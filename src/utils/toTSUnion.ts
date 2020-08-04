/**
 * Converts a string array to a TypeScript union type.
 * For example, ['A', 'B', 'C'] becomes 'A' | 'B' | 'C'
 * @param types the type array to convert.
 */
export const toTSUnion = (types: string[]): string => {
  return `${types.join(` | `)}`;
};
