import { getBooks } from './books.model.js';

const bookResolvers = {
    Query: {
        books: () => getBooks(),
    },
};

export { bookResolvers };
