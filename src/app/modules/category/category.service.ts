import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category) => {
    return await prisma.category.create({
        data: {
            ...data
        }
    });
};

const getAllCategory = async () => {
    return await prisma.category.findMany();
};

const getCategoryById = async (id: string) => {
    return await prisma.category.findUnique({
        where: {
            id: id
        },
        include: {
            books: true
        }
    });
};

const updateCategoryById = async (id: string, data: Partial<Category>) => {
    return await prisma.category.update({
        where: {
            id: id
        },
        data: {
            ...data
        }
    });
};
const deleteCategoryById = async (id: string) => {
    return await prisma.category.delete({
        where: {
            id: id
        }
    });
};

export const categoryService = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
};
