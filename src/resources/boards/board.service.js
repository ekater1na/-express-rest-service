const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getBoard = id => boardsRepo.getBoard(id);

module.exports = { getAll, getBoard };
