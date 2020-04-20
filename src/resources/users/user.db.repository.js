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
  return User.updateOne({ _id: userId }, user);
};

const deleteById = async id => {
  return User.deleteOne({ _id: id });
};

module.exports = { getAll, getById, add, update, deleteById };
