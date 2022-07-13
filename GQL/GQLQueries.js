const {  GraphQLList } = require('graphql')
const { UserModel } = require('./GQLModels')
const { getAllUsers } = require('../DB/DBQueries')

const getAllUsersQuery = {
    type: new GraphQLList(UserModel),

    resolve(parent, args) {
        return getAllUsers()
    }
}

module.exports = { getAllUsersQuery }