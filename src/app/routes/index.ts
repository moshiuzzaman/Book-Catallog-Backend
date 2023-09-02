import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CategoryRoutes } from '../modules/category/cateory.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
    // ... routes
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/users',
        route: UserRoutes
    },
    {
        path: '/categories',
        route: CategoryRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
