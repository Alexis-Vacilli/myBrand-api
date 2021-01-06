import {config} from 'dotenv'; 
import express from 'express';
import create from '../../controllers/create-article';
import checkAuth from "../../middleware/check-auth";

const router = express.Router();
config();

router.post('/', checkAuth,create);

export default router;