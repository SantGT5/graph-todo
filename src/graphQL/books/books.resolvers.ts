import { getBooks } from "./books.model.js";

export const bookResolvers = {
  Query: {
    books: () => {
      return getBooks();
    },
  },
};
