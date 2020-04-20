const Task = require('./task.model');

const getAll = async () => {
  return Task.find({});
};

const getById = async (_boardId, taskId) => {
  return Task.findOne({ _id: taskId, boardId: _boardId });
};

const add = async (_boardId, task) => {
  return Task.create({ ...task, boardId: _boardId });
};

const update = async (_boardId, taskId, task) => {
  return Task.update({ _id: taskId, boardId: _boardId }, task);
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
  add,
  update,
  deleteById,
  deleteByBoard,
  nullByUser
};
