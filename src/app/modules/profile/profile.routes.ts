import { Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { profileController } from './profile.controller';

const router = express.Router();

router.get('/', auth(Role.admin, Role.admin), profileController.getProfile);

export const ProfileRoutes = router;
