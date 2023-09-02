import { Role } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { categoryController } from './category.controller';
import { categoryValidation } from './category.validation';
const router = express.Router();

router.post(
    '/',
    validateRequest(categoryValidation.createValidation),
    auth(Role.admin),
    categoryController.createCategory
);
router.get('/', categoryController.getAllCategory);
router.get('/:id', categoryController.getCategoryById);
router.put(
    '/:id',
    validateRequest(categoryValidation.createValidation),
    auth(Role.admin),
    categoryController.updateCategoryById
);
router.delete('/:id', auth(Role.admin), categoryController.deleteCategoryById);

export const CategoryRoutes = router;
