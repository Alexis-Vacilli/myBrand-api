import {config} from 'dotenv'; 
import express from 'express';
import readArticle from '../../controllers/read-article-details';


const router = express.Router();
config();

router.post('/:id',readArticle);

export default router;