const { GraphQLObjectType, GraphQLSchema} = require('graphql')
const { createUserMutation} = require('./GQLMutations')
const { getAllUsersQuery } = require('./GQLQueries')

const Query = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: getAllUsersQuery
   }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUserMutation
    }
});

module.exports = new GraphQLSchema({query: Query, mutation: Mutation})