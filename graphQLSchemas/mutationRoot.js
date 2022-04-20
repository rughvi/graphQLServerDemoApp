const graphql = require('graphql');
const objects = require('../graphQLObjectTypes/objects');
const dbClient = require('../db/dbClient').dbClient;

const MutationRoot = new graphql.GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        player: {
            type: objects.Player,
            args: {
                first_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString)},
                last_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString)},
                team_id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt)}
            },
            resolve: (parent, args, context, resolveInfo) => {
                const query = `INSERT INTO player (first_name, last_name, team_id) VALUES($1, $2, $3) RETURNING  *`;
                const values=[args.first_name, args.last_name, args.team_id];
                if(args.first_name === ''){
                    throw new Error('first_name cannot be empty');
                }

                if(args.last_name === ''){
                    throw new Error('last_name cannot be empty');
                }

                if(args.team_id < 1){
                    throw new Error('team_id is invalid');
                }

                return dbClient.query(query, values)
                .then(res => res.rows[0])
                .catch(err => err)
            }
        }
    })
});

module.exports = {
    MutationRoot
}