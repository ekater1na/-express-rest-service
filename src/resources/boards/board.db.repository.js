const Board = require('./board.model');

const getAll = async () => {
  return Board.find({});
};

const getById = async id => {
  return Board.findById(id);
};

const getBoardByProps = async props => {
  return Board.find(props);
};

const add = async board => {
  return Board.create(board);
};

const update = async BoardToUpdate => {
  return Board.updateOne({ _id: BoardToUpdate.id });
};

const deleteById = async id => {
  return (await Board.deleteOne({ _id: id })).deletedCount;
};
module.exports = { getAll, getById, getBoardByProps, add, update, deleteById };
