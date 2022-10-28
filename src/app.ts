import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { incorrectRouteHandler, mainErrorhandler } from './helpers/errors';

const app = express();

/**
 * @middleware
 */
app.use(express.json());
app.use(morgan('common'));
app.use(cors());

app.use((req, res) => {
  return res.json({
    message: 'success'
  });
});

/**
 * @description handle errors.
 */
app.use(incorrectRouteHandler);
app.use(mainErrorhandler);

export default app;
