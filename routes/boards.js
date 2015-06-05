var express = require('express'),
    router = express.Router();

var Board = require('../models/board');

router.route('/boards')

  // POST /boards
  .post(function (req, res) {
    var board = new Board();
    board.name = req.body.name;

    board.save(function (err) {
      if (err)
        res.send(err);

      res.json(board);
    });

  });

router.route('/boards/:boardId')

  // GET /boards/12345
  .get(function(req, res) {
    Board.findById(req.params.boardId, function (err, board) {
      if (err)
        res.send(err);
      res.json(board);
    });
  })

  .put(function (req, res) {
    Board.findById(req.params.boardId, function (err, board) {
      if (err)
        res.send(err)

      board.name = req.body.name;

      board.save(function (err) {
        if (err)
          res.send(err);

        res.json(board);
      });
    });
  });

module.exports = router;
