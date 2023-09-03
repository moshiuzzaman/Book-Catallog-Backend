import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { userService } from './user.service';

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.getAllUsers();

    sendResponse(res, {
        
        message: 'Users retrieved successfullyF',
        data: result
    });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.getUserById(req.params.id);

    sendResponse(res, {
        message: 'User retrieved successfully',
        data: result
    });
});

const updateUserById = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.updateUserById(req.params.id, req.body);

    sendResponse(res, {
        message: 'User updated successfully',
        data: result
    });
});

const deleteUserById = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.deleteUserById(req.params.id);

    sendResponse(res, {
        message: 'User deleted successfully',
        data: result
    });
});

export const userController = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};
