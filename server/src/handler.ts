import { AxiosError } from "axios";
import type { ErrorRequestHandler, response, Response } from "express";
import type { ApiErrorResponse } from "./type";

export const errorHandler: ErrorRequestHandler = (
    error, req, res:Response<ApiErrorResponse>, next
    ) => {
        if(error instanceof AxiosError) {
            console.error("axios 에러: ", error);

            res.status(500).json({
                meta: {ok: false, type: "axios"},
                data: {message: "API측 문제입니다.\n잠시 후에 다시 시도해주세요."},
            });
        } else {
            console.error('알 수 없는 에러: ', error);

            res.status(501).json({
                meta: { ok: false, type: "unknown"},
                data: { message: '서버 측 문제입니다. \n잠시 후에 다시 시도해주세요.' },
            });
        }
};