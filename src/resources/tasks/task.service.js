const tasksRepo = require('./task.db.repository');

const getAll = () => tasksRepo.getAll();
const getById = id => tasksRepo.getById(id);
const add = board => tasksRepo.add(board);
const update = (id, board) => tasksRepo.update(id, board);
const deleteById = () => tasksRepo.deleteById();
const deleteByBoard = boardId => tasksRepo.deleteTaskByBoard(boardId);
const nullByUser = userId => tasksRepo.nullTaskByUser(userId);

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteById,
  deleteByBoard,
  nullByUser
};
