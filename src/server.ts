import http from 'http';

import app from './app';

const server = http.createServer(app);

async function startServer() {
  //   await mongoConnect();
  server.listen(5000, () => {
    console.log('server has started on port ' + 5000);
  });
}

startServer();
