const { gql } = require('apollo-server');
const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
    price: Int
    createdAt: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, price: Int):Book
  }
`;

module.exports = typeDefs;