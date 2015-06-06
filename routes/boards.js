var express  = require('express'),
    router   = express.Router();

var Board = require('../models/board');

router.route('/boards')

  // GET /boards
  .get(function (req, res) {
    res.json({message: "Fake GET index route!"});
  })

  // POST /boards
  .post(function (req, res) {
    var board = new Board();

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

  // PUT /boards/12345
  .put(function (req, res) {
    Board.findById(req.params.boardId, function (err, board) {
      if (err)
        res.send(err)
      
      for (prop in req.body) {
        board[prop] = req.body[prop];
      }

      board.save(function (err) {
        if (err)
          res.send(err);

        res.json(board);
      });
    });
  });

module.exports = router;
