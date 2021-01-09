import createRoutes from './api/create-article';
import {Router} from 'express';
import documentationRouter from '../documentaion/index';

const router = Router();
router.use("/articles", createRoutes);
router.use('/docs', documentationRouter);
export default router;