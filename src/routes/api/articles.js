import {config} from 'dotenv'; 
import express from 'express';
import deleteArticle from '../../controllers/delete-article';

const router = express.Router();
config();

router.delete('/:id', deleteArticle);

export default router;