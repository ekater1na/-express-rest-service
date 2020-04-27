const usersRepo = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();
const getById = id => usersRepo.getById(id);
const add = user => usersRepo.add(user);
const update = (id, user) => usersRepo.update(id, user);
const deleteById = async id => {
  await usersRepo.deleteById(id);
  await tasksService.nullByUser(id);
};
const findOneByLogin = login => usersRepo.findOneByLogin(login);

module.exports = {
  getAll,
  getById,
  add,
  update,
  deleteById,
  findOneByLogin
};
