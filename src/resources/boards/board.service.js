const boardsRepo = require('./board.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();
const getById = id => boardsRepo.getById(id);
const add = board => boardsRepo.add(board);
const update = (id, board) => boardsRepo.update(id, board);
const deleteById = async id => {
  await boardsRepo.deleteById(id);
  await tasksService.deleteByBoard(id);
};

module.exports = { getAll, getById, add, update, deleteById };
