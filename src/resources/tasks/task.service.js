const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getTask = id => tasksRepo.getTask(id);

module.exports = { getAll, getTask };
