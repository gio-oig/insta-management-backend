import { NextFunction, Request, Response } from 'express';
import { findByEmail, signup } from '../../models/user.model';
import hash from '../../helpers/hash';
import bcrypt from 'bcrypt';
import { ExtendedError } from '../../helpers/errorClass';
import getToken from '../../helpers/getToken';

const httpSignup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const hashedPassword = await hash(password);

  await signup({
    name,
    email,
    password: hashedPassword
  });

  return res.status(200).json({ message: 'user created succesfully' });
};

const httpSignin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const user = await findByEmail(email);

    if (!user) {
      throw new ExtendedError('User does not exists');
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      throw new ExtendedError('Invalid password', 500);
    }

    const token = getToken({
      email: user.email
    });

    return res.status(200).json({ message: 'success', data: { token } });
  } catch (error) {
    next(error);
  }
};

const me = (req: Request, res: Response) => {
  return res.status(200).json({ message: 'success' });
};

export { httpSignin, httpSignup, me };
