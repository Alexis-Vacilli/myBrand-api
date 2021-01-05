import userRoutes from './api/users';
import {Router} from 'express';
const router = Router();
router.use("/signup", userRoutes);

export default router;