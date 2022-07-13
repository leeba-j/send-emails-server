const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },

});

const UserModel = model('User', UserSchema);
;
module.exports = { UserModel }