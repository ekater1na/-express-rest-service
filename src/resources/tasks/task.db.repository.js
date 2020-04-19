const Task = require('./task.model');

const getAll = async () => {
  return Task.find({});
};

const getById = async id => {
  return Task.findById(id);
};

const getTaskByProps = async props => {
  return Task.find(props);
};

const add = async task => {
  return Task.create(task);
};

const update = async TaskToUpdate => {
  return Task.updateOne({ _id: TaskToUpdate.id });
};

const deleteById = async id => {
  return (await Task.deleteOne({ _id: id })).deletedCount;
};

const deleteByBoard = async _boardId => {
  const del = await Task.deleteMany({ boardId: _boardId }).exec();
  return del;
};

const nullByUser = async _userId => {
  return Task.updateMany({ userId: _userId }, { userId: null });
};

module.exports = {
  getAll,
  getById,
  getTaskByProps,
  add,
  update,
  deleteById,
  deleteByBoard,
  nullByUser
};
