import express from 'express';
import login from '../../controllers/login';
const router = express.Router();
require ('dotenv').config();

router.post('/' ,login);

export default router;