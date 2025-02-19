import express, {Router} from 'express';
import { addFollowing, getFollowing } from '../../api/user/follow';

const followRouter = express.Router();

//팔로잉 조회
followRouter.get('/count/:id', getFollowing);

//팔로잉 추가
followRouter.post('/add/:id', addFollowing);

//팔로잉 삭제
followRouter.post('/sub', );

export default followRouter;