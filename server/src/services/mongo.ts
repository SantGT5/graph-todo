import mongoose, { connect, disconnect, ConnectOptions } from 'mongoose';

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions;

const MONGO_URL = process.env.MONGODB_URL as string;

mongoose.connection.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('🪐 MongoDB ready at http://localhost:8081/');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect(): Promise<void> {
    await connect(MONGO_URL, mongodbOptions);
}

async function mongoDisconnect(): Promise<void> {
    await disconnect();
}

export { mongoConnect, mongoDisconnect };
