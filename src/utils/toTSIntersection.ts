/**
 * Converts a string array to a TypeScript intersection type.
 * For example, ['T', 'S'] becomes T & S.
 * @param types the type array to convert.
 */
export const toTSIntersection = (types: string[]): string => {
  return `${types.join(' & ')}`;
};
