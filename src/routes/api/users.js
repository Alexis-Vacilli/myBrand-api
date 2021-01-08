import {config} from 'dotenv';
import express from 'express';
import register from '../../controllers/register';
import login from '../../controllers/login';
import validator from "../../middleware/validatePassword";
config();
const router = express.Router();
router.post('/signup', validator,register);
router.post('/login' ,login);
export default router;

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Users
 *     name: Login
 *     summary: Creates a new user
 *     consumes:
 *       - application/json
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                 type: string
 *                password:
 *                 type: string
 *     responses:
 *       200:
 *             description: Auth successful.
 *       401:
 *             description: Invalid credentials.
 *       500:
 *             description: Server error.
 * */