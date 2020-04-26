const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findById(id);
};

const add = async user => {
  return User.create(user);
};

const update = async (userId, user) => {
  return User.findOneAndUpdate({ _id: userId }, user, {
    new: true
  });
};

const deleteById = async id => {
  return User.deleteOne({ _id: id });
};

const findOneByLogin = async _login => {
  return User.findOne({ login: _login });
};

module.exports = { getAll, getById, add, update, deleteById, findOneByLogin };
