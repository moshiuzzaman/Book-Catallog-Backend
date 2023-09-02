import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { authService } from './auth.service';

const signUp = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.signUp(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.signIn(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully',
    token: result,
  });
});

export const authController = {
  signUp,
  signIn,
};
