import {config} from 'dotenv'; 
import express from 'express';
import readArticle from '../../controllers/read-article-details';


const router = express.Router();
config();

router.get('/:id',readArticle);

export default router;

/**
 * @swagger
 * /articles:
 *   get:
 *     tags:
 *       - Articles
 *     name: Get article by ID 
 *     summary: Get one article in details
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *             description:  Successfully fetched an article.
 *       500:
 *             description: Server error.
 * */