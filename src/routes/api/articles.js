import {config} from 'dotenv'; 
import express from 'express';
import updateArticle from '../../controllers/update-article';

const router = express.Router();
config();

router.patch('/:id', updateArticle);

export default router;