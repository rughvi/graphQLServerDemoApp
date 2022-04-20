// const graphql = require('graphql');
// const Player = require('./player').Player;

// var Team = new graphql.GraphQLObjectType({
//     name: 'Team',
//     fields: () => ({
//       id: { type: graphql.GraphQLInt },
//       name: { type: graphql.GraphQLString },
//       players: {
//         type: new graphql.GraphQLList(Player),
//         sqlJoin: (teamTable, playerTable, args) => `${teamTable}.id = ${playerTable}.team_id`
//         //resolve: team => [null]
//       }
//     })
//   })
      
//   Team._typeConfig = {
//     sqlTable: 'team',
//     uniqueKey: 'id'
//   }

//   exports.Team = { Team };