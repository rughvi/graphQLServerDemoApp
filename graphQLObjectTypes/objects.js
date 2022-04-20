const graphql = require('graphql');
const dbClient = require('../db/dbClient').dbClient;

const Player = new graphql.GraphQLObjectType({
    name: 'Player',
    fields: () => ({
      id: { type: graphql.GraphQLString },
      first_name: { type: graphql.GraphQLString },
      last_name: { type: graphql.GraphQLString },
      team: {
        type: Team,
        resolve: (parent, args, context, resolveInfo) => {
          const query = `SELECT * FROM team WHERE id = $1 `;
          const values = [parent.team_id];

          return dbClient.query(query, values)
          .then(res => res.rows[0])
          .catch(err => err);
        }
      }
    })
  });
      
  Player._typeConfig = {
    sqlTable: 'player',
    uniqueKey: 'id',
  }
      
  var Team = new graphql.GraphQLObjectType({
    name: 'Team',
    fields: () => ({
      id: { type: graphql.GraphQLInt },
      name: { type: graphql.GraphQLString },
    //   players: {
    //     type: graphql.GraphQLList(Player),
    //     extensions: {
    //         joinMonster:{
    //             sqlJoin: (teamTable, playerTable, args) => `${teamTable}.id = ${playerTable}.team_id`
    //         }
    //     }        
    //  }
    })
  })
      
  Team._typeConfig = {
    sqlTable: 'team',
    uniqueKey: 'id'
  }

  module.exports = {
      Player
  }