const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  tasksService
    .getTask(req.params.id)
    .then(task =>
      !task
        ? res.status(404).send('Task not found')
        : res.json(Task.toResponse(task))
    )
    .catch(() => {
      res.status(400).send('Bad request');
    });
});

module.exports = router;
