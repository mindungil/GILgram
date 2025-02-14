type ApiType = 'axios' | 'prisma' | 'unknown';

export type ApiResponse<T> = {
    meta: { ok: boolean; type?: ApiType};
    data: { message: string } & T;
};

export type ApiErrorResponse = ApiResponse<{}>;