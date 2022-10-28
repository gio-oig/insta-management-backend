import { NextFunction, Request, Response } from 'express';
import { ExtendedError } from './errorClass';

export const incorrectRouteHandler = (
  _: Request,
  __: Response,
  next: NextFunction
) => {
  return next(new Error('Could not find this route'));
};

export const mainErrorhandler = (
  error: ExtendedError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('error handler route');

  const errorObject: { message: string; error?: object } = {
    message: error.message
  };

  if (error.data) {
    errorObject.error = error.data;
  }

  res.status(error.statusCode || 500);
  res.json(errorObject);
};
