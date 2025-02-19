import express, {Router} from 'express';
import { getFollower } from '../../api/user/follow';

const followerRouter = express.Router();

//팔로워 조회
followerRouter.get('/count/:id', getFollower);

//팔로워 삭제
followerRouter.post('/sub/:id', );

export default followerRouter;