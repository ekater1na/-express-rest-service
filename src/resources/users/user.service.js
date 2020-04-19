const usersRepo = require('./user.db.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };

// module.exports = {
//   getAll,
//   pushNew: usersRepo.pushNew,
//   getById: usersRepo.getById,
//   update: usersRepo.update,
//   remove: usersRepo.remove
// };
