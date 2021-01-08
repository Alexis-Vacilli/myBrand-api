import deleteRoute from './api/articles';
import {Router} from 'express';
import documentationRouter from '../documentation/index';

const router = Router();
router.use('/articles', deleteRoute);
router.use('/docs', documentationRouter);
export default router;

/**
/**
 * @swagger
 * /articles:
 *   post:
 *     tags:
 *       - Articles
 *     name: Create 
 *     summary: Creates an article
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
 *             description:  Created article successfully.
 *       402:
 *             description: Auth failed.
 *       500:
 *             description: Server error.
 * */