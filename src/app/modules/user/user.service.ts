import { User } from '@prisma/client';
import { exclude } from '../../../helpers/excludingFields';
import prisma from '../../../shared/prisma';
import { hashPassword } from '../../../shared/utils';
import { userFieldsSelectWithOutPassword } from './user.constant';

// get all users
const getAllUsers = async () => {
    return await prisma.user.findMany({
        select: userFieldsSelectWithOutPassword
    });
};

const getUserById = async (id: string) => {
    const result = await prisma.user.findUnique({
        where: {
            id: id
        }
    });
    const userWithoutPassword = exclude(result, ['password']);
    return userWithoutPassword;
};

const updateUserById = async (id: string, data: Partial<User>) => {
    if (data.password) {
        data.password = await hashPassword(data.password);
    }

    const result = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            ...data
        }
    });

    const userWithoutPassword = exclude(result, ['password']);
    return userWithoutPassword;
};

const deleteUserById = async (id: string) => {
    const result = await prisma.user.delete({
        where: {
            id: id
        }
    });

    const userWithoutPassword = exclude(result, ['password']);
    return userWithoutPassword;
};

export const userService = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};
