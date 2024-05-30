import express from 'express';
import { getNFTs } from '../controller/nft';

const router = express.Router();

router.get('/', getNFTs);

export default router;
