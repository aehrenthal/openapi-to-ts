/**
 * Converts an OpenAPI description to a JavaScript comment.
 * @param description the description that should be converted.
 */
export const convertComment = (description: string): string => {
  return `/**
  * ${description.trim().replace('\n+$', '').replace(/\n/g, '\n  * ')}
  */`;
};
