const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const graphql = require('graphql');
const schemas = require('./graphQLSchemas/schemas');
const dbClient = require('./db/dbClient');

const schema = new graphql.GraphQLSchema({ query: schemas.QueryRoot.QueryRoot });

dbClient.dbClient.connect();

const app = express();
app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000);