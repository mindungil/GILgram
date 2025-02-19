import express, { NextFunction, Request, Response } from "express"
import User from "../../model/User";
import errorHandler, {customError} from "../../handler";
// _id 를 통한 user 관련 db 조회
// jwt, byscript 구현하기기


export const getFollower = async (req: Request, res: Response, next: NextFunction) => {
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

export const getFollowing = async (req: Request, res: Response, next: NextFunction) => {
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
        const {id} = req.params;
        const user = req.body.data.user;

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