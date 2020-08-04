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

