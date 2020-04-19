const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const getById = async id => {
  return User.findById(id);
};

const getUserByProps = async props => {
  return User.find(props);
};

const add = async user => {
  return User.create(user);
};

const update = async userToUpdate => {
  return User.updateOne({ _id: userToUpdate.id });
};

const deleteById = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAll, getById, getUserByProps, add, update, deleteById };
