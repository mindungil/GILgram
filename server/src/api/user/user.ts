import express, { Request, Response, NextFunction } from "express"
import { customError } from "../../handler";
import User from "../../model/User";

export const getUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.body.data;

        if(!id) {
            throw new customError(404, 'id 리소스 없음');
        }
        
        const user = await User.findById(id);
        if(!user) {
            throw new customError(500, 'db 오류');
        }

        res.status(200).json({
            success: true,
            message: 'user 조회 성공',
            data: user
        });
    } catch(err) {
        next(err);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id, update} = req.body.data;
        if(!id || !update) {
            throw new customError(404, '리소스 없음');
        }

        const updateUser = await User.findByIdAndUpdate(id, update, {new: true});
        if(!updateUser) {
            throw new customError(404, '유저를 찾을 수 없음');
        }

        res.status(200).json({
            success: true,
            message: '유저 정보 업데이트',
            data: updateUser
        });
        
        //update 하는 방식에 있어서, front 에서는 모델 문서의 테이블을 전부 다 가지고 전송했는가?
        // 전부 다 가지고 전송했다면 그대로 update 하는 로직
        // 만약 바꾸는 부분만 전송한다면 router 분리?
        // 자기 table 정보는 front에서 전부 다 가지고 있다고 가정?
    } catch(err) {
        next(err);
    }
};

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body.data;
        if(!user) {
            throw new customError(404, '유저 리소스 없음');
        }

        const newUser = await User.create(user);
        if(!newUser) {
            throw new customError(500, 'DB 저장 오류');
        }

        res.status(200).json({
            success: true,
            message: '유저 등록 성공',
            data: newUser
        });
    } catch(err) {
        next(err);
    }
};

