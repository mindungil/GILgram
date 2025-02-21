import express, {Router} from 'express';
import followRouter from './followRouter';
import followerRouter from './followerRouter';
import { getUserInfo, updateUser, postUser } from '../../api/user/user';

const userRouter = express.Router();

//유저 정보 조회
userRouter.get('/user', getUserInfo);

//유저 정보 수정
userRouter.post('/user', updateUser);

userRouter.post('/new/user', postUser);

//follow, follower 관련 라우터 분리
userRouter.use('/follow', followRouter);
userRouter.use('/follower', followerRouter);

export default userRouter;
