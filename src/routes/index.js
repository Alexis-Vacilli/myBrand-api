import createRoutes from './api/articles';
import {Router} from 'express';

const router = Router();
router.use("/articles", createRoutes);

export default router;