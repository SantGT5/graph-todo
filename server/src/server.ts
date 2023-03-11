import type { Server, IncomingMessage, ServerResponse } from 'http';

import http from 'http';
import { mongoConnect } from './services/mongo';

import { app, startApolloServer } from './app';

const httpServer: Server<typeof IncomingMessage, typeof ServerResponse> =
    http.createServer(app);

const PORT = '4000';

async function startServer(): Promise<void> {
    await startApolloServer(httpServer);

    await mongoConnect();

    httpServer.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(
            `🚀 ApolloServer ready at http://localhost:${PORT}/graphql`
        );
    });
}

startServer();
