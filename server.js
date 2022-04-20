const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const graphql = require('graphql');
const schemas = require('./graphQLSchemas/schemas');
const dbClient = require('./db/dbClient');

dbClient.dbClient.connect();

const app = express();
app.use('/api', graphqlHTTP({
  schema: schemas.schema,
  graphiql: true,
}));
app.listen(4000);