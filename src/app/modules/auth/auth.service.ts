import { User } from '@prisma/client';
import config from '../../../config';
import { exclude } from '../../../helpers/excludingFields';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { hashPassword, passwordCompare } from '../../../shared/utils';

const signUp = async (data: User): Promise<Partial<User>> => {
  const hashedPassword = await hashPassword(data.password);

  const result = await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
  const userWithoutPassword = exclude(result, ['password']);
  return userWithoutPassword;
};

const signIn = async (data: User): Promise<string> => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!isUserExist) {
    throw new Error('User not found!');
  }

  await passwordCompare(data.password, isUserExist.password);

  const tokenData = {
    role: isUserExist.role,
    userId: isUserExist.id,
  };
  const token = await jwtHelpers.createToken(
    tokenData,
    config.jwt.secret,
    config.jwt.expires_in
  );

  const tokenDecode = await jwtHelpers.verifyToken(token, config.jwt.secret);
  console.log(tokenDecode);

  return token;
};

export const authService = {
  signUp,
  signIn,
};
