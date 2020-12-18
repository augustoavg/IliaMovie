import 'express-async-errors';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use((request: Request, response: Response, _: NextFunction) => {
  return response.status(404).send('Unable to find the requested resource!');
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
