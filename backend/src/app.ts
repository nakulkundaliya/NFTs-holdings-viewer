
import express from 'express';
import cors from 'cors';

import nftRoutes from './routes/nft';

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'OPTIONS,GET,PUT,POST,PATCH,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
  };
  
  //use cors middleware
  app.use(cors(corsOptions));
  

app.use('/api/nfts', nftRoutes);

export default app;
