const usersRepo = require('./user.db.repository');

const getAll = () => usersRepo.getAll();

const add = id => usersRepo.add(id);

const update = (id, userToUpdate) => usersRepo.update(id, userToUpdate);

// const putBoard = (id, board) => usersRepo.putBoard(id, board);

module.exports = { getAll, add, update };
// module.exports = { getAll, getById, getUserByProps, add, update, deleteById };
