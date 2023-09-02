import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { orderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    const result = await orderService.createOrder(token, req.body);
    sendResponse(res, {
        message: 'Order created successfully',
        data: result
    });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    const result = await orderService.getOrders(token);
    sendResponse(res, {
        message: 'Orders retrieved successfully',
        data: result
    });
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    const result = await orderService.getOrderById(req.params.id, token);
    sendResponse(res, {
        message: 'Order retrieved successfully',
        data: result
    });
});

export const orderController = {
    createOrder,
    getAllOrders,
    getOrderById
};
