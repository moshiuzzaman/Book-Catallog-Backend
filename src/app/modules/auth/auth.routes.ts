import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authController } from './auth.controller';
import { authValidation } from './auth.validation';

const router = express.Router();

router.post(
    '/signup',
    validateRequest(authValidation.signuplidation),
    authController.signUp
);

router.post(
    '/signin',
    validateRequest(authValidation.signinValidation),
    authController.signIn
);

export const AuthRoutes = router;
