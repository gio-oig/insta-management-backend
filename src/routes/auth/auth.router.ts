import express from 'express';
import { authorize } from '../../middlewares/auth';
import {
  signinValidation,
  signupValidation
} from '../../middlewares/validations';
const authRouter = express.Router();

import { httpSignup, httpSignin, me } from './auth.controller';

authRouter.post('/signup', signupValidation, httpSignup);
authRouter.post('/signin', signinValidation, httpSignin);
authRouter.get('/me', authorize, me);
export default authRouter;
