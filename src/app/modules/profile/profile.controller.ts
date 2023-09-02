import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { profileService } from './profile.service';
import sendResponse from '../../../shared/sendResponse';

const getProfile = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    const result = await profileService.getProfile(token);
    sendResponse(res, {
        message: 'Profile retrieved successfully',
        data: result
    });
});

export const profileController = {
    getProfile
};
