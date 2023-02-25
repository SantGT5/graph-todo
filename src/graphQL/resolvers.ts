import { mergeResolvers } from '@graphql-tools/merge'

import { bookResolvers } from './books/books.resolvers.js'

export const resolvers = mergeResolvers([bookResolvers])
