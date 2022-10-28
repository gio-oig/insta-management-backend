import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { incorrectRouteHandler, mainErrorhandler } from './helpers/errors';
import api from './routes/api';

const app = express();

/**
 * @middleware
 */
app.use(express.json());
app.use(morgan('common'));
app.use(cors());

app.use('/', api);

/**
 * @description handle errors.
 */
app.use(incorrectRouteHandler);
app.use(mainErrorhandler);

export default app;
