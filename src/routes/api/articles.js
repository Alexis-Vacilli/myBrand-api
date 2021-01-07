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
 *   GET:
 *     tags:
 *       - Articles
 *     name: Read 
 *     summary: Read all article
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                title:
 *                 type: string
 *                description:
 *                 type: string
 *     responses:
 *       200:
 *             description:  Read all articles.
 *       500:
 *             description: Server error.
 * */