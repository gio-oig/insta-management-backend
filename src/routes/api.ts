import express from 'express';
import authRouter from './auth/auth.router';
import instaItemRouter from './instaItem/instaItem.router';

const api = express.Router();

api.use('/auth', authRouter);
api.use('/instaItem', instaItemRouter);

export default api;
