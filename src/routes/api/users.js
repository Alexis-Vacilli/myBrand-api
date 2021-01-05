require ('dotenv').config();
import express from 'express';
import login from '../../controllers/login';
import connect from '../../config/mongoose';

connect();

const router = express.Router();

router.post('/' ,login);

export default router;