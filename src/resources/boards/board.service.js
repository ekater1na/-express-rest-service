const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getBoard = id => boardsRepo.getBoard(id);

const postBoard = board => boardsRepo.postBoard(board);

const putBoard = (id, board) => boardsRepo.putBoard(id, board);

// const deleteBoard

module.exports = { getAll, getBoard, postBoard, putBoard };
