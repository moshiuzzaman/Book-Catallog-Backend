import { exclude } from '../../../helpers/excludingFields';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const getProfile = async (token: string) => {
    const { userId } = jwtHelpers.decodeToken(token);
    const result = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    const userWithoutPassword = exclude(result, ['password']);
    return userWithoutPassword;
};

export const profileService = {
    getProfile
};
