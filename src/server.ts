import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import http from "http";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { resolvers } from "./graphQL/resolvers.js"

const typesArray = loadFilesSync("**/*", {
  extensions: ["gql"],
});

const typeDefs = makeExecutableSchema({
  typeDefs: typesArray
});

const app = express();

const httpServer = http.createServer(app);

async function startApolloServer() {

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server)
  );
}

startApolloServer();

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 ApolloServer ready at http://localhost:4000/graphql`);
