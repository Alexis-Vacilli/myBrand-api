import {config} from 'dotenv'; 
import express from 'express';
import read from '../../controllers/read-article';

config();
const router = express.Router();
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