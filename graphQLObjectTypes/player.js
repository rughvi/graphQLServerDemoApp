// const graphql = require('graphql');
// const Team = require('./team').Team;

// const Player = new graphql.GraphQLObjectType({
//     name: 'Player',
//     fields : () => ({
//         id: { type: graphql.GraphQLString },
//         first_name: { type: graphql.GraphQLString },
//         last_name: { type: graphql.GraphQLString },
//         team: {
//             type: Team,
//             sqlJoin: (playerTable, teamTable, args) => `${playerTable}.team_id = ${teamTable}.id`
//         }
//     })
// });

// Player._typeConfig = {
//     sqlTable: 'player',
//     uniqueKey: 'id'
// }

// exports.Player = { Player }