import updateRoutes from './api/articles';
import {Router} from 'express';
import documentationRouter from '../documentation/index';

const router = Router();
router.use('articles', updateRoutes);
router.use('/docs', documentationRouter);
export default router;