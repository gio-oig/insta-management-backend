import http from 'http';
import 'dotenv/config.js';

import app from './app';

import { mongoConnect } from './services/mongo';

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoConnect();
  server.listen(PORT, () => {
    console.log('server has started on port ' + PORT);
  });
}

startServer();
