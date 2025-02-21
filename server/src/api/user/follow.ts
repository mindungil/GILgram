import express, { NextFunction, Request, Response } from "express"
import User from "../../model/User";
import errorHandler, {customError} from "../../handler";
// _id 를 통한 user 관련 db 조회
// jwt, byscript 구현하기기

export const Following = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const checkId = await User.findById(id);
        if(!checkId) {
            throw new customError(404, '본인 _id 오류');
        } 

        const followings = await User.findById(id).select("followings");

        res.status(200).json({
            success: true,
            message: '요청 성공',
            data: followings
        });
    } catch(error) {
        next(error);
    }
};

export const addFollowing = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id, user} = req.body.data;

        const checkId = await User.findById(id);
        if(!checkId) {
            throw new customError(404, '본인 _id 오류');
        }

        if(!user) {
            throw new customError(404, '대상 user 리소스 없음');
        }

        const newFollowings = await User.findByIdAndUpdate(id, { $push: { followings: user}}, {new: true});
        if(!newFollowings) {
            throw new customError(500, 'DB 저장 오류');
        }

        res.status(200).json({
            success: true,
            message: '요청 성공',
            data: newFollowings?.followings
        });
    } catch(error) {
        next(error);
    }
};

export const subFollowing = async (req: Request, res: Response, next: NextFunction) => { 
    try {
        const {id, user} = req.body.data;

        const checkId = await User.findById(id);
        if(!checkId) throw new customError(404, '_id 오류');

        const followings = await User.findByIdAndUpdate(
            id,
            {$pull: {followings: user}},
            {new: true}
        );

        if(!followings) {
            throw new customError(500, 'Db 오류');
        }

        res.status(200).json({
            success: true,
            mesage: '팔로잉 추가 성공',
            data: followings
        });
    } catch(error) {
        next(error);
    }
};

export const subFollower = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id, user} = req.body.data;

        if(!id || !user) {
            throw new customError(404, '리소스가 전송되지 않음');
        }
        
        const followers = await User.findByIdAndUpdate(id, {$push: {followers: user}}, {new: true});

        if(!followers) {
            throw new customError(500, 'Db 오류');
        }

        res.status(200).json({
            success: true,
            message: '팔로워 삭제 성공',
            data: followers
        });
    } catch(err) {
        next(err);
    }
}

export const Follower = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        const checkId = await User.findById(id);
        if(!checkId) {
            throw new customError(404, '본인 _id 오류');
        } 
        
        const followers = await User.findById(id).select("followers");

        res.status(200).json({
            success: true,
            message: '요청 성공',
            data: followers
        });
    } catch(error) {
        next(error);
    }
};

// 로직 처리 중 고민
// -> 팔로잉을 위해 상대방의 _id를 알아야 한다. front 에서 _id를 준다면 상대 user의 _id를 바로 check 할 수 있지만, 
// --> front 계층에서 _id를 획득할 수 있는가?