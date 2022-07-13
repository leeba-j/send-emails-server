const { UserModel } = require('./DBModels');

const createUser = async ({ name, email, height, weight }) => {
    await UserModel.create({ name, email, height, weight });
    return `Operation successfully completed`;
};

const getAllUsers = async () => {
    const users = await UserModel.find({});

    return users;
}

module.exports = { createUser, getAllUsers }