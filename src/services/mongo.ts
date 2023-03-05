import mongoose, { connect, disconnect, ConnectOptions } from 'mongoose';

import 'dotenv/config';

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

const MONGO_URL = 'mongodb://mongo:27017/graphqlTodo';

mongoose.connection.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('🪐 MongoDB ready at http://localhost:8081/');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await connect(MONGO_URL, mongodbOptions).catch(() => {
        process.exit(-1);
    });
}

async function mongoDisconnect() {
    await disconnect();
}

export { mongoConnect, mongoDisconnect };
