import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ExtendedError } from '../helpers/errorClass';
import { findByEmail } from '../models/user.model';

export const authorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return next(new ExtendedError('Could not find token', 401));
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return next(new ExtendedError('Could not find token', 401));
  }

  try {
    const { email } = verify(token, process.env.SECRET || 'hello') as {
      email: string;
    };
    const user = await findByEmail(email);

    if (!user) {
      throw new ExtendedError('Not real user');
    }
  } catch (error) {
    if (error instanceof ExtendedError) {
      return next(error);
    } else {
      return next(new ExtendedError('Unauthorized', 401));
    }
  }
  next();
};
