const router = require('express').Router();
const createError = require('http-errors');

const User = require('./user.model');
const usersService = require('./user.service');
const catchErrors = require('../../helpers/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const users = await usersService.getAll();
    return res.status(200).json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    if (!user) {
      throw createError(404, `User '${req.params.id}' not found`);
    }
    return res.status(200).json(User.toResponse(user));
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const isUser = await usersService.add(req.params.id);
    if (!isUser) {
      throw createError(404, `User '${req.params.id}' not found`);
    }
    const user = await usersService.update(req.params.id, req.body);
    return res.status(200).json(user);
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const user = await usersService.add(req.body);
    return res.status(200).json(User.toResponse(user));
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const message = await usersService.deleteById(req.params.id);
    return res.status(204).json({ message });
  })
);

module.exports = router;
