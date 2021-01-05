import userRoutes from './api/users';
import {Router} from 'express';
const router = Router();
router.use("/login", userRoutes);

export default router;