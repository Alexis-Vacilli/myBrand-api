import {config} from 'dotenv'; 
import express from 'express';
import create from '../../controllers/read-articles';
//import checkAuth from "../../middleware/check-auth";

const router = express.Router();
config();

router.get('/',create);

export default router;