import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { bookService } from './book.service';

const crateBook = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.createBook(req.body);
    sendResponse(res, {
        message: 'Book created successfully',
        data: result
    });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.getAllBooks();
    sendResponse(res, {
        message: 'Books retrieved successfully',
        data: result
    });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.getBookById(req.params.id);
    sendResponse(res, {
        message: 'Book retrieved successfully',
        data: result
    });
});

const updateBookById = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.updateBookById(req.params.id, req.body);
    sendResponse(res, {
        message: 'Book updated successfully',
        data: result
    });
});

const deleteBookById = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.deleteBookById(req.params.id);
    sendResponse(res, {
        message: 'Book deleted successfully',
        data: result
    });
});

export const bookController = {
    crateBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
};
