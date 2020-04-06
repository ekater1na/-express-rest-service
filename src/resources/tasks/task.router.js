const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const users = await tasksService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Task.toResponse));
});

module.exports = router;
