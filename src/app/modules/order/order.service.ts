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

const getOrderById = async(id: string, token: string) => {
    const { userId, role } = jwtHelpers.decodeToken(token);
    let result;
    if (role == 'admin') {
        result =await prisma.order.findUnique({
            where: {
                id
            },
            include: {
                orderedBooks: true
            }
        });
    } else {
        result =await prisma.order.findUnique({
            where: {
                id,
                userId
            },
            include: {
                orderedBooks: true
            }
        });
    }

    if (!result) {
        throw new Error('Invalid order id');
    }
    return result;
};

export const orderService = {
    createOrder,
    getOrders,
    getOrderById
};
