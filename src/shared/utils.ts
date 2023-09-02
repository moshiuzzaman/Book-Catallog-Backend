import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import config from '../config';
import ApiError from '../errors/ApiError';

export const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_Salt_Rounds)
  );
  return hashedPassword;
};

export const passwordCompare = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  const isPasswordMatched = await bcrypt.compare(givenPassword, savedPassword);
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Wrong password');
  }
  return isPasswordMatched;
};

export const selectReturnUser = {
  id: true,
  email: true,
  name: true,
  role: true,
  contactNo: true,
  address: true,
  profileImg: true,
};
