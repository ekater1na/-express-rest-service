const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const users = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(Board.toResponse));
});

module.exports = router;
