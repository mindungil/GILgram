import express, {Router} from 'express';
import likeRouter from './likeRouter';
import commentRouter from './comment';

const postRouter = express.Router();

//게시물 조회
postRouter.get('/info', );

//게시물 등록
postRouter.post('/add', );

//게시물 삭제
postRouter.post('/sub', );

//좋아요 관련 router
postRouter.use('/like', likeRouter);

//댓글 관련 router
postRouter.use('/comment', commentRouter);


export default postRouter;