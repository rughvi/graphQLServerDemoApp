const https = require("https");
const fs = require("fs");
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
// app.listen(4000);
https
  .createServer(
		// Provide the private and public key to the server by reading each
		// file's content with the readFileSync() method.
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, () => {
    console.log("serever is runing at port 4000");
  });