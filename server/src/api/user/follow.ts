import { NextFunction, Request, Response } from "express"
import User from "../../model/User";
import { errorHandler } from "../../handler";
// _id 를 통한 user 관련 db 조회
// jwt, byscript 구현하기기


const getFollower = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params;
        
        const followers = User.findById(id).select("followers");

        res.status(200).json({
            success: true,
            message: '요청 성공',
            data: followers
        });
    } catch(error) {
        next(error);
    }
}