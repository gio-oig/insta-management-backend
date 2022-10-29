import users, { IUser } from './user.mongo';

export const signup = async (userData: IUser) => {
  const user = await users.create(userData);
  return user;
};

export const findByEmail = async (email: string) => {
  const user = await users.findOne({ email });
  return user;
};
