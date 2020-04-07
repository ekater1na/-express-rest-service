const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getBoard = id => boardsRepo.getBoard(id);

const postBoard = board => boardsRepo.postBoard(board);

module.exports = { getAll, getBoard, postBoard };
