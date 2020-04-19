const boardsRepo = require('./board.db.repository');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const add = board => boardsRepo.add(board);

const update = (id, board) => boardsRepo.update(id, board);

const deleteById = () => boardsRepo.deleteById();

module.exports = { getAll, getById, add, update, deleteById };
