export interface IPet {
  newPet?: INewPet;
  [key: string]: any;
}

export interface INewPet {
  name: string;
  tag?: string;
}

export interface IError {
  code: number;
  message: string;
}

