import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { categoryService } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryService.createCategory(req.body);

    sendResponse(res, {
        message: 'Category created successfully',
        data: result
    });
});

const getAllCategory = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryService.getAllCategory();

    sendResponse(res, {
        message: 'Categories retrieved successfully',
        data: result
    });
});

const getCategoryById = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryService.getCategoryById(req.params.id);

    sendResponse(res, {
        message: 'Category retrieved successfully',
        data: result
    });
});

const updateCategoryById = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryService.updateCategoryById(
        req.params.id,
        req.body
    );

    sendResponse(res, {
        message: 'Category updated successfully',
        data: result
    });
});

const deleteCategoryById = catchAsync(async (req: Request, res: Response) => {
    const result = await categoryService.deleteCategoryById(req.params.id);

    sendResponse(res, {
        message: 'Category deleted successfully',
        data: result
    });
});

export const categoryController = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
};
