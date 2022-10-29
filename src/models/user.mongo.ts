import mongoose, { Schema } from 'mongoose';

const requiredString = { type: String, required: true };

export interface IUser {
  name: string;
  email: string;
  password: string;
}

const usersSchema = new Schema<IUser>({
  name: requiredString,
  email: { ...requiredString, unique: true },
  password: requiredString
});

export default mongoose.model<IUser>('User', usersSchema);
