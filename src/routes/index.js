import userRoutes from './api/users';
import {Router} from 'express';
import documentationRouter from '../documentation/index';
const router = Router();
router.use("/", userRoutes);
router.use('/docs', documentationRouter);
export default router;