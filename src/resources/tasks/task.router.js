const router = require('express').Router();
const tasksService = require('./task.service');
const catchErrors = require('../../helpers/catchErrors');
const createError = require('http-errors');
const Task = require('./task.model');

router.route('/').get(
  catchErrors(async (req, res) => {
    const tasks = await tasksService.getAll(req.boardId);
    return res.status(200).json(tasks.map(Task.toResponse));
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const task = await tasksService.getById(req.boardId, req.params.id);
    if (!task) {
      throw createError(404, `Task '${req.params.id}' not found`);
    }
    return res.status(200).json(Task.toResponse(task));
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const task = await tasksService.update(
      req.boardId,
      req.params.id,
      req.body
    );
    if (!task) {
      throw createError(404, `Task '${req.params.id}' not found`);
    }
    return res.status(200).json(Task.toResponse(task));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const task = await tasksService.add(req.boardId, req.body);
    return res.status(200).json(Task.toResponse(task));
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const delCount = await tasksService.deleteById(req.params.id);
    if (delCount === 0) {
      throw createError(404, `Task '${req.params.id}' not found`);
    }
    return res.status(204).json({ deleteCount: delCount });
  })
);

module.exports = router;
