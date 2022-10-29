import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || '';

mongoose.connection.once('open', () => {
  console.log('mongoDB connection ready!');
});

mongoose.connection.on('error', (error) => {
  console.error(error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect };
