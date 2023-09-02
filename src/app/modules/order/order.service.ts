import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { IOrder } from './order.interface';

const createOrder = (token: string, order: IOrder) => {
    const { userId, role } = jwtHelpers.decodeToken(token);
    console.log(userId, role, token);

    if (role !== 'customer') {
        throw new Error('customer only can order');
    }
    return prisma.order.create({
        data: {
            userId,
            orderedBooks: {
                create: order.orderedBooks
            }
        },
        include: {
            orderedBooks: true
        }
    });
};

const getOrders = (token: string) => {
    const { userId, role } = jwtHelpers.decodeToken(token);
    if (role == 'admin') {
        return prisma.order.findMany({
            include: {
                orderedBooks: true
            }
        });
    }
    return prisma.order.findMany({
        where: {
            userId
        },
        include: {
            orderedBooks: true
        }
    });
};

const getOrderById = (id: string, token: string) => {
    const { userId, role } = jwtHelpers.decodeToken(token);
    if (role == 'admin') {
        return prisma.order.findUnique({
            where: {
                id
            },
            include: {
                orderedBooks: true
            }
        });
    }
    return prisma.order.findUnique({
        where: {
            id,
            userId
        }
    });
};

export const orderService = {
    createOrder,
    getOrders,
    getOrderById
};
