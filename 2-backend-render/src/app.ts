import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));

app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'AfyaLink Backend' });
});

export default app;
