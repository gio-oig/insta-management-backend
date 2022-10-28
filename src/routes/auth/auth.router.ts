import express from 'express';
const authRouter = express.Router();

import { signin, signup } from './auth.controller';

authRouter.get('/signup', signup);
authRouter.get('/signin', signin);

export default authRouter;
