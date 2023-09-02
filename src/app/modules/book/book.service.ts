import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBook = async (data: Book) => {
    return await prisma.book.create({
        data: {
            ...data
        }
    });
};

const getAllBooks = async () => {
    return await prisma.book.findMany({
        include: {
            category: true
        }
    });
};

const getBookById = async (id: string) => {
    return await prisma.book.findUnique({
        where: {
            id: id
        },
        include: {
            category: true
        }
    });
};

const updateBookById = async (id: string, data: Partial<Book>) => {
    return await prisma.book.update({
        where: {
            id: id
        },
        data: {
            ...data
        }
    });
};

const deleteBookById = async (id: string) => {
    return await prisma.book.delete({
        where: {
            id: id
        }
    });
};

export const bookService = {
    createBook,
    getAllBooks,
    getBookById,
    updateBookById,
    deleteBookById
};
