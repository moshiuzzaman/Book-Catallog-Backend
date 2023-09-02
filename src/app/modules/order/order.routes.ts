import { Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { orderController } from './order.controller';
import { orderValidation } from './order.velidation';

const router = express.Router();

router.post(
    '/',
    auth(Role.customer),
    validateRequest(orderValidation.createValidation),

    orderController.createOrder
);

router.get('/', auth(Role.admin, Role.customer), orderController.getAllOrders);
router.get(
    '/:id',
    auth(Role.admin, Role.customer),
    orderController.getOrderById
);

export const OrderRoutes = router;
