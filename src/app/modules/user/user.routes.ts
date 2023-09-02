import { Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { userController } from './user.controller';

const router = express.Router();

router.get('/:id', auth(Role.admin), userController.getUserById);
router.get('/', auth(Role.admin), userController.getAllUsers);
router.put('/:id', auth(Role.admin), userController.updateUserById);
router.delete('/:id', auth(Role.admin), userController.deleteUserById);

export const UserRoutes = router;
