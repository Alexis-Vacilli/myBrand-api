import signupRoute from './api/register';
import loginRoute from './api/login'
import createRoutes from './api/articles';
import readRoutes from './api/read-article';
import updateRoutes from './api/update-article';
import deleteArticle from './api/delete-article';
import {Router} from 'express';
import documentationRouter from '../documentaion/index';
const router = Router();
router.use('/docs', documentationRouter);
router.use("/signup", signupRoute);
router.use("/login", loginRoute);
router.use("/articles", createRoutes);
router.use("/articles", readRoutes);
router.use('/articles', updateRoutes);
router.use('/articles', deleteArticle)
export default router;
