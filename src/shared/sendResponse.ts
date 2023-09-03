import { Response } from 'express';

type IApiReponse<T> = {
    statusCode?: number;
    success?: boolean;
    message?: string | null;
    token?: string | null;
    meta?: {
        page: number;
        size: number;
        total: number;
        totalPage: number;
    };
    data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
    const responseData: IApiReponse<T> = {
        statusCode: data.statusCode
            ? data.statusCode
            : data.success || data.success === undefined
            ? 200
            : 500,
        success: data.success ?? true,
        message: data.message ?? null,
        token: data.token ?? null ?? undefined,
        meta: data.meta ?? null ?? undefined,
        data: data.data ?? null ?? undefined
    };

    res.status(responseData.statusCode as number).json(responseData);
};

export default sendResponse;
