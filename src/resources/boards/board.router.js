const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  boardsService
    .getBoard(req.params.id)
    .then(board =>
      !board
        ? res.status(404).send('Board not found')
        : res.json(Board.toResponse(board))
    )
    .catch(() => {
      res.status(400).send('Bad request');
    });
});

router.route('/').post(async (req, res) => {
  boardsService
    .postBoard(req.body)
    .then(board =>
      !board
        ? res.status(404).send('Board not found')
        : res.json(Board.toResponse(board))
    )
    .catch(() => {
      res.status(400).send('Bad request');
    });
});

router.route('/:id').put(async (req, res) => {
  boardsService
    .putBoard(req.params.id, req.body)
    .then(board =>
      !board
        ? res.status(404).send('Board not found')
        : res.json(Board.toResponse(board))
    )
    .catch(() => {
      res.status(400).send('Bad request');
    });
});

// router.route('/').delete('/:id', async (req, res) => {
//   const target = await category.delete(req.params.id);

//   res.send(target);
// });

module.exports = router;
