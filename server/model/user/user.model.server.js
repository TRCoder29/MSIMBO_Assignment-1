var mongoose = require('mongoose');
var UserSchema = require ('./user.schema.server.js')
var UserModel = mongoose.model('UserModel', UserSchema)

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCreadentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

function createUser(user){
	return UserModel.create(user);
}

function findUserById(uid){
	return UserModel.findUserById(uid);
}

function findUserByUsername(username){
	return UserModel.findUserByUsername(username);
}

function findUserByCredentials(username, password){
	return UserModel.findUserByCredentials({username, password});
}

function updateUser (uid, user){
	return UserModel.update({_id: uid, user});
}

function deleteUser (uid){
	return UserModel.remove({_id: uid});
}

module.exports = UserModel;