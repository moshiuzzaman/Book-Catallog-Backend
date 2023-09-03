import { Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { bookController } from './book.controller';
import { bookValidation } from './book.validation';

const router = express.Router();

router.post(
    '/create-book',
    validateRequest(bookValidation.create),
    auth(Role.admin),
    bookController.crateBook
);
router.get('/', bookController.getAllBooks);
router.get('/:categoryId/category', bookController.getBookByCategoryId);
router.get('/:id', bookController.getBookById);
router.put(
    '/:id',
    validateRequest(bookValidation.update),
    auth(Role.admin),
    bookController.updateBookById
);
router.delete('/:id', auth(Role.admin), bookController.deleteBookById);

export const BookRoutes = router;
