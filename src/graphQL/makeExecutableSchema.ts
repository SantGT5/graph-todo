import { GraphQLSchema } from 'graphql';

import type { IResolvers, TypeSource } from '@graphql-tools/utils';

import { mergeResolvers } from '@graphql-tools/merge';

import { loadFilesSync } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';

// resolvers
import { noteResolvers } from './notes/notes.resolvers.js';

const resolvers: IResolvers = mergeResolvers([noteResolvers]);

const typeDefs: GraphQLSchema = makeExecutableSchema({
    typeDefs: loadFilesSync<TypeSource>('**/*', {
        extensions: ['gql'],
    }),
});

export { resolvers, typeDefs };
