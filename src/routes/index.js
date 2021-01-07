import deleteRoute from './api/articles';
import {Router} from 'express';
import documentationRouter from '../documentation/index';

const router = Router();
router.use('articles', deleteRoute);
router.use('/docs', documentationRouter);
export default router;