import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { ExtendedError } from '../helpers/errorClass';
import { FormatedInputError, formatError } from '../helpers/formatError';
import { IUser } from '../models/user.mongo';

const signupInputValidation = (data: IUser) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(3).required()
  }).options({ abortEarly: false });
  return schema.validate(data);
};

const signinInputValidation = (data: IUser) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }).options({ abortEarly: false });
  return schema.validate(data);
};

const createInstaItemValidation = (data: IUser) => {
  const schema = Joi.object({
    image: Joi.string().required(),
    type: Joi.string().valid('user', 'tag').required(),
    name: Joi.string().required(),
    mediaCount: Joi.when('type', {
      is: 'tag',
      then: Joi.required()
    })
  }).options({ abortEarly: false });
  return schema.validate(data);
};

export const signupValidation = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const { error } = signupInputValidation(req.body);
  let formatedErrorObj: FormatedInputError = {};

  if (error) {
    formatedErrorObj = formatError(error);
    next(new ExtendedError('Invalid properties', 500, formatedErrorObj));
  }
  next();
};

export const signinValidation = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const { error } = signinInputValidation(req.body);
  let formatedErrorObj: FormatedInputError = {};

  if (error) {
    formatedErrorObj = formatError(error);
    next(new ExtendedError('Invalid properties', 500, formatedErrorObj));
  }
  next();
};

export const instaItemValidation = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const { error } = createInstaItemValidation(req.body);
  let formatedErrorObj: FormatedInputError = {};

  if (error) {
    formatedErrorObj = formatError(error);
    next(new ExtendedError('Invalid properties', 500, formatedErrorObj));
  }
  next();
};
