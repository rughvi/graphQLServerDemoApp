const graphql = require('graphql')

const QueryRoot = require('./queryRoot');
const MutationRoot = require('./mutationRoot');

const schema = new graphql.GraphQLSchema({ 
  query: QueryRoot.QueryRoot,  
  mutation: MutationRoot.MutationRoot
});

module.exports = { 
  schema 
};

