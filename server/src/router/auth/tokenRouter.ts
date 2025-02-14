import express, {Router} from 'express';

const tokenRouter = express.Router();

//access 토큰 발급
tokenRouter.post('/access', );

//access 토큰 만료처리
tokenRouter.post('/delete-access', );

//refersh 토큰 발급
tokenRouter.post('/refresh', );

//refersh 토큰 만료 처리
tokenRouter.post('/delete-refresh', );

export default tokenRouter;