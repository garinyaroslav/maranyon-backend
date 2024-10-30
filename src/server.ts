import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

import ProductRouter from '../src/routes/product.router';
import NewsRouter from '../src/routes/news.router';
import ReviewRouter from '../src/routes/review.router';

export const prisma = new PrismaClient();
const app = express();
const port = 8080;

async function main() {
  app.use(cors());
  app.use(express.json());

  app.use('/product', ProductRouter);
  app.use('/news', NewsRouter);
  app.use('/review', ReviewRouter);

  app.all('*', (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
