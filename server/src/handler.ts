import express, {Request, Response, NextFunction} from 'express';

interface ErrorResponse {
    success: false;
    message: string;
    data?: any;
}

interface CustomError extends Error {
    status?: number;
    data?: any;
}

export class customError extends Error {
    status?: number;
    data?: any;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        Error.captureStackTrace(this, this.constructor); // 원본 에러 스택 유지하도록 하는 코드드
    }
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const response: ErrorResponse = {
        success: false,
        message: err.message || "서버 내부 오류",
        data: err.data || null
    };

    res.status(status).json(response);
};

export default errorHandler;