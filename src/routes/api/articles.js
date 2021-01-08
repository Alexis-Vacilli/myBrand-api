import {config} from 'dotenv'; 
import express from 'express';
import updateArticle from '../../controllers/update-article';

const router = express.Router();
config();

router.patch('/:id', updateArticle);

export default router;

/**
 * @swagger
 * /articles:
 *   update:
 *     tags:
 *       - Articles
 *     name: Update 
 *     summary: Updates an article
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
 *       201:
 *             description:  Updates an article.
 *       500:
 *             description: Server error.
 * */