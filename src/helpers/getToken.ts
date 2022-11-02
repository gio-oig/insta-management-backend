import jwt from 'jsonwebtoken';

export default function getToken(tokenData: Record<string, string>) {
  const token = jwt.sign(
    {
      ...tokenData,
      time: Date.now()
    },
    process.env.SECRET || 'hello'
  );

  return token;
}
