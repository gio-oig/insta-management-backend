import bcrypt from 'bcrypt';

export default async function hash(str: string) {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(str, salt);
}
