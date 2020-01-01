const database = require("../database/core");
const Book = require("../database/book.model.js");
const resolvers = {
  Query: {
    books: () => Book.findAll(),
  },
  Mutation:{
    addBook: async (_, args) => {
        return await database.sync().then(() => Book.create(args));
    },
  }
};

module.exports = resolvers;