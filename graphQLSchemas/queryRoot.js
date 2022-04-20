const graphql = require('graphql');
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
          playerByName: {
              type: new graphql.GraphQLList(objects.Player),
              args: { name : {type: graphql.GraphQLString } },
              resolve: (parent, args, context, resolveInfo) => {
                  const query = `SELECT * FROM player WHERE first_name = $1 or last_name = $1`;
                  const values = [args.name];

                  return dbClient.query(query,values)
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
          },
          teamByName: {
            type: new graphql.GraphQLList(objects.Team),
            args: { name: { type: graphql.GraphQLString } },
            resolve: (parent, args, context, resolveInfo) => {
                const query = `SELECT * FROM team WHERE name = $1`;
                const values = [args.name];
                return dbClient.query(query, values)
                .then(res => res.rows)
                .catch(err => err);
            }
        }
    })
})

module.exports = {
    QueryRoot
}