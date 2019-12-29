require('dotenv').config()


const { ApolloServer } = require('apollo-server');
const resolvers = require("./resolvers/books.resolver.js");
const typeDefs = require("./schemas/books.schema.js");

const app = new ApolloServer({ typeDefs, resolvers });

module.exports = app;
