/**
 * This file was auto-generated by openapi-to-ts. Do not change it manually!
 */
export interface Pet {
  id: number;
  name: string;
  tag?: string;
}

export interface Pets {
  pet?: Pet;
}

/**
 * This is the common error model.
 */
export interface Error {
  code: number;
  message: string;
}

