import { ValidationError } from 'joi';

export interface FormatedInputError {
  [name: string]: string;
}

export const formatError = (error: ValidationError): FormatedInputError => {
  const formatedErrorObject: FormatedInputError = {};

  for (const i of error.details) {
    const key = i.path[0];
    formatedErrorObject[key] = i.message;
  }

  return formatedErrorObject;
};
