import {config} from 'dotenv';
import express from 'express';
import deleteArticle from '../../controllers/delete-article';

config();
const router = express.Router();
router.delete('/:id', deleteArticle);
export default router;

/**
/**
 * @swagger
 * /articles:
 *   delete:
 *     tags:
 *       - Articles
 *     name: Delete 
 *     summary: Delete an article
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
 *             description:  Article deleted.
 *       500:
 *             description: Server error.
 * */