const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  usersService
    .getUser(req.params.id)
    .then(user =>
      !user
        ? res.status(404).send('User not found')
        : res.json(User.toResponse(user))
    )
    .catch(() => {
      res.status(400).send('Bad request');
    });
});

module.exports = router;
