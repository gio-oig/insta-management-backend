import express from 'express';

const app = express();

app.use((req, res) => {
  return res.json({
    message: 'success'
  });
});

export default app;
