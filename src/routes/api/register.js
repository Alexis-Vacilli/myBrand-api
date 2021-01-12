import {config} from 'dotenv';
import express from 'express';
import register from '../../controllers/register';
import validator from "../../middleware/validatePassword";


config();
const router = express.Router();
router.post('/', validator,register);
export default router;

/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - Users
 *     name: Signup
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
 *       201:
 *             description: user created successfully.
 *       409:
 *             description: The email is already in the system.
 *       500:
 *             description: Bad request.
 * */