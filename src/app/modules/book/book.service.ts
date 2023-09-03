import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { IBookFilterRequest } from './book.interface';
import { bookSearchableFields } from './books.constants';

const createBook = async (data: Book) => {
    return await prisma.book.create({
        data: {
            ...data
        }
    });
};

const getAllBooks = async (
    filters: IBookFilterRequest,
    options: IPaginationOptions
) => {
    const { size, page, skip } = paginationHelpers.calculatePagination(options);
    const { search, ...filterData } = filters;

    const andConditions = [];

    if (search) {
        andConditions.push({
            OR: bookSearchableFields.map(field => ({
                [field]: {
                    contains: search,
                    mode: 'insensitive'
                }
            }))
        });
    }
    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map(key => ({
                [key]: {
                    equals: (filterData as any)[key]
                }
            }))
        });
    }
    const { minPrice, maxPrice } = options;
    if (minPrice) {
        andConditions.push({
            AND: [
                {
                    price: { gte: Number(minPrice) }
                }
            ]
        });
    }

    if (maxPrice) {
        andConditions.push({
            AND: [
                {
                    price: { lte: Number(maxPrice) }
                }
            ]
        });
    }

    const whereConditions: Prisma.BookWhereInput =
        andConditions.length > 0 ? { AND: andConditions } : {};

    const result = await prisma.book.findMany({
        where: whereConditions,
        skip,
        take: size,
        orderBy:
            options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                      title: 'desc'
                  }
    });
    const total = await prisma.book.count({ where: whereConditions });

    const totalPage = Math.ceil(total / size);

    return {
        meta: {
            page: Number(page),
            size: Number(size),
            total,
            totalPage
        },
        data: result
    };
};

const getBookById = async (id: string) => {
    const result = await prisma.book.findUnique({
        where: {
            id: id
        },
        include: {
            category: true
        }
    });
    if (!result) {
        throw new Error('Invalid book id');
    }
    return result;
};

const getBookByCategoryId = async (
    categoryId: string,
    options: IPaginationOptions
) => {
    const { size, page, skip } = paginationHelpers.calculatePagination(options);

    const result = await prisma.book.findMany({
        where: {
            categoryId: categoryId
        },
        include: {
            category: true
        },
        skip,
        take: size,
        orderBy:
            options.sortBy && options.sortOrder
                ? { [options.sortBy]: options.sortOrder }
                : {
                      title: 'desc'
                  }
    });

    const total = await prisma.book.count({
        where: {
            categoryId: categoryId
        }
    });

    const totalPage = Math.ceil(total / size);

    return {
        meta: {
            page: Number(page),
            size: Number(size),
            total,
            totalPage
        },
        data: result
    };
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
    deleteBookById,
    getBookByCategoryId
};
