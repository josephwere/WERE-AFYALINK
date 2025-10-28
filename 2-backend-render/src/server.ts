import dotenv from "dotenv";
dotenv.config();

import app from './app';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

async function start() {
  try {
    // simple health check for DB
    await prisma.$connect();
    console.log('✅ Prisma connected');
  } catch (err) {
    console.error('Prisma connection error:', err);
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
  });
}

start();

