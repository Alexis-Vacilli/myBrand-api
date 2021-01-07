import {config} from 'dotenv'; 
import express from 'express';
import create from '../../controllers/create-article';
//import checkAuth from "../../middleware/check-auth";

const router = express.Router();
config();

router.post('/',create);

export default router;

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