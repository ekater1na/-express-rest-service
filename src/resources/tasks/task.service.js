const tasksRepo = require('./task.db.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);
const add = (boardId, task) => tasksRepo.add(boardId, task);
const update = (boardId, taskId, task) =>
  tasksRepo.update(boardId, taskId, task);
const deleteById = taskId => tasksRepo.deleteById(taskId);
const deleteByBoard = boardId => tasksRepo.deleteByBoard(boardId);
const nullByUser = userId => tasksRepo.nullByUser(userId);

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteById,
  deleteByBoard,
  nullByUser
};
