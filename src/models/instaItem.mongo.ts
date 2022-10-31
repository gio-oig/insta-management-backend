import mongoose, { Schema } from 'mongoose';

const requiredString = { type: String, required: true };

export interface IInstaItem {
  image: string;
  type: string;
  name: string;
  mediaCount?: number;
}

const usersSchema = new Schema<IInstaItem>({
  image: String,
  type: {
    type: String,
    enum: ['user', 'tag'],
    immutable: true
  },
  name: requiredString,
  mediaCount: Number
});

export default mongoose.model<IInstaItem>('IInstaItem', usersSchema);
