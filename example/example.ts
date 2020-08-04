export interface IPet {
  id: number;
  name: string;
  tag?: string;
}

export interface IPets {
  pet?: IPet;
}

export interface IError {
  code: number;
  message: string;
}

