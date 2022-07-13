const { GraphQLNonNull, GraphQLString } = require('graphql')
const { UserDetailsInputObject } = require('./GQLInputObjects')
const { createdUserAndSendEmail } = require('../services/emailService');

const createUserMutation = {
    type: new GraphQLNonNull(GraphQLString),
    args: {
        userDetails: { type: new GraphQLNonNull(UserDetailsInputObject) }
    },
    resolve(parent, args) {
        return createdUserAndSendEmail(args.userDetails)
    }
}

module.exports = { createUserMutation }