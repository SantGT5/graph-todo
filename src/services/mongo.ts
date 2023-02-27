import mongoose, { connect, disconnect } from 'mongoose';

import 'dotenv/config';

const MONGO_URL = 'mongodb://127.0.0.1:27017/graphqlTodo';

mongoose.connection.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('🪐 MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await connect(MONGO_URL);
}

async function mongoDisconnect() {
    await disconnect();
}

export { mongoConnect, mongoDisconnect };
