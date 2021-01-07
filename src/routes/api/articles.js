import {config} from 'dotenv'; 
import express from 'express';
import read from '../../controllers/read-articles';

const router = express.Router();
config();

router.get('/',read);

export default router;

/**
 * @swagger
 * /articles:
 *   get:
 *     tags:
 *       - Articles
 *     name: Read 
 *     summary: Read all articles
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *             description:  Fetched all articles successfully.
 *       500:
 *             description: Server error.
 * */