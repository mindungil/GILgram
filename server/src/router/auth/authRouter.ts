import express, {Router} from 'express';
import tokenRouter from './tokenRouter';

const authRouter = express.Router();

//token 라우터 분리
authRouter.use('/token', tokenRouter);

//로그인
authRouter.post('/login', );

//로그아웃
authRouter.post('/logout', );

//회원가입
authRouter.post('/signup', );

//회원탈퇴
authRouter.post('/deleteid', );


export default authRouter;