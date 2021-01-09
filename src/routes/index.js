import createRoutes from './api/articles';
import {Router} from 'express';
import documentationRouter from '../documentaion/index';

const router = Router();
router.use("/articles", createRoutes);
router.use('/docs', documentationRouter);
router.use("/login", userRoutes);
router.use('/docs', documentationRouter);
export default router;