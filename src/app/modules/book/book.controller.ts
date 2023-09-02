import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { bookService } from './book.service';
import { bookFilterableFields } from './books.constants';

const crateBook = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.createBook(req.body);
    sendResponse(res, {
        message: 'Book created successfully',
        data: result
    });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, bookFilterableFields);
    const options = pick(req.query, [
        'size',
        'page',
        'sortBy',
        'sortOrder',
        'minPrice',
        'maxPrice'
    ]);
    const result = await bookService.getAllBooks(filters, options);
    sendResponse(res, {
        message: 'Books retrieved successfully',
        meta: result.meta,
        data: result.data
    });
});

const getBookById = catchAsync(async (req: Request, res: Response) => {
    const result = await bookService.getBookById(req.params.id);
    sendResponse(res, {
        message: 'Book retrieved successfully',
        data: result
    });
});

const getBookByCategoryId = catchAsync(async (req: Request, res: Response) => {
    const options = pick(req.query, [
        'size',
        'page',
        'sortBy',
        'sortOrder',
        'minPrice',
        'maxPrice'
    ]);
    const result = await bookService.getBookByCategoryId(
        req.params.id,
        options
    );
    sendResponse(res, {
        message: 'Books retrieved successfully',
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
    deleteBookById,
    getBookByCategoryId
};
