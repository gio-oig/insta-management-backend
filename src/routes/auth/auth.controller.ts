import { Request, Response } from 'express';

const signup = async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'signup' });
};

const signin = async (req: Request, res: Response) => {
  return res.status(200).json({ message: 'signin' });
};

export { signin, signup };
