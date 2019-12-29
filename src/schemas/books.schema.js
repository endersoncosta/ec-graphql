const { gql } = require('apollo-server');
const typeDefs = gql`
  type Book {
    title: String
    author: String
    price: Int
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, price: Int):Book
  }
`;

module.exports = typeDefs;