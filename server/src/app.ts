import type { Express } from 'express';
import type { Server, IncomingMessage, ServerResponse } from 'http';
import type { BaseContext } from '@apollo/server';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Apollo
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
// import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import bodyParser from 'body-parser';

import { resolvers, typeDefs } from './graphQL/makeExecutableSchema';

const app: Express = express();

app.use(
    cors({
        origin: ['http://localhost:3050', 'https://studio.apollographql.com'],
        optionsSuccessStatus: 200,
    })
);

app.use(
    helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false })
);

app.use(express.json());

async function startApolloServer(
    httpServer: Server<typeof IncomingMessage, typeof ServerResponse>
): Promise<void> {
    const server: ApolloServer<BaseContext> = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            // ApolloServerPluginLandingPageDisabled(),
        ],
        includeStacktraceInErrorResponses: false,
    });

    await server.start();

    app.use('/graphql', bodyParser.json(), expressMiddleware(server));
}

export { app, startApolloServer };
