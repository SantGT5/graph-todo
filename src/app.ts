import type { Express } from 'express';
import type { Server, IncomingMessage, ServerResponse } from 'http';
import type { BaseContext } from '@apollo/server';

import express from 'express';
import cors from 'cors';

// Apollo
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';

import { resolvers, typeDefs } from './graphQL/makeExecutableSchema.js';

const app: Express = express();

app.use(
    cors({
        origin: 'http://localhost:4000',
    })
);

app.use(express.json());

async function startApolloServer(
    httpServer: Server<typeof IncomingMessage, typeof ServerResponse>
): Promise<void> {
    const server: ApolloServer<BaseContext> = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();

    app.use(
        '/graphql',
        cors<cors.CorsRequest>({ origin: ['http://localhost:4000'] }),
        bodyParser.json(),
        expressMiddleware(server)
    );
}

export { app, startApolloServer };
