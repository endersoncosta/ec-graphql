const Book = require("../database/book.model.js");
const resolvers = {
  Query: {
    books: () => Book.findAll(),
  },
  Mutation:{
    addBook: (_, args) => Book.create(args),
  }
};

module.exports = resolvers;