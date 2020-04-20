const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findById(id);
};

const add = async board => {
  return Board.create(board);
};

const update = async (boardId, board) => {
  return Board.update({ _id: boardId }, board);
};

const deleteById = async id => {
  return Board.deleteOne({ _id: id });
};

module.exports = { getAll, getById, add, update, deleteById };
