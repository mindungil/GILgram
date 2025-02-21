import express, {Router} from 'express';
import { Follower, subFollower } from '../../api/user/follow';

const followerRouter = express.Router();

//팔로워 조회
followerRouter.get('/count/:id', Follower);

//팔로워 삭제
followerRouter.post('/sub', subFollower);

export default followerRouter;