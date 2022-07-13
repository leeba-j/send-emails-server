const { GraphQLString, GraphQLObjectType, GraphQLNonNull, GraphQLFloat } = require('graphql');

const UserModel = new GraphQLObjectType({
    name: 'User'
    ,
    fields: () => ({
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        height: { type: new GraphQLNonNull(GraphQLFloat) },
        weight: { type: new GraphQLNonNull(GraphQLFloat) }

    })
});

module.exports = { UserModel }