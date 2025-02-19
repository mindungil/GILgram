import express, {Router} from 'express';
import userRouter from './user/userRouter';
import postRouter from './post/postRouter';
import authRouter from './auth/authRouter';
import { errorHandler } from '../handler';

const router = express.Router();

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/auth', authRouter);

export default router;

