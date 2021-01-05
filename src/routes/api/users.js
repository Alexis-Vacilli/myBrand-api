import express from 'express';
import register from '../../controllers/register';
import validator from "../../middleware/validatePassword"
const router = express.Router();
require ('dotenv').config();

router.post('/', validator,register);

export default router;