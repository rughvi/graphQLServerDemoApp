const graphql = require('graphql');
//const Player = require('../graphQLObjectTypes/player').Player;
//const Team = require('../graphQLObjectTypes/team').Team;
const objects = require('../graphQLObjectTypes/objects');
const dbClient = require('../db/dbClient').dbClient;

const QueryRoot = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        hello: {
            type: graphql.GraphQLString,
            resolve: () => "Hello world!"
          },
          players:{
              type: new graphql.GraphQLList(objects.Player),
              resolve: (parent, args, context, resolveInfo) => {
                  const query = `SELECT * FROM player`;
                  return dbClient.query(query)
                  .then(res => res.rows)
                  .catch(err => err);
              }
          },
          teams: {
              type: new graphql.GraphQLList(objects.Team),
              resolve: (parent, args, context, resolveInfo) => {
                  const query = `SELECT * FROM team`;
                  return dbClient.query(query)
                  .then(res => res.rows)
                  .catch(err => err);
              }
          }
    })
})

module.exports = {
    QueryRoot
}