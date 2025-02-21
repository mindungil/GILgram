import express, {Router} from 'express';
import { addFollowing, Following, subFollowing } from '../../api/user/follow';

const followRouter = express.Router();

//팔로잉 조회
followRouter.get('/get/:id', Following);

//팔로잉 추가
followRouter.post('/add', addFollowing);

//팔로잉 삭제
followRouter.post('/sub', subFollowing);

export default followRouter;