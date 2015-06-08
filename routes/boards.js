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
    Board.findOne({ fbId: req.fbUser }, function (err, board) {
      if (err) {
        res.json(err);
      } else if (board) {
        // 409: request could not be completed due to a conflict with 
        // the current state of the resource
        // res.status(409).json({ message: "Board already exists." });
        console.log('409??: ', board);
        // res.json(board)
      } else {
        var board = new Board();
        board.fbId = req.fbUser;
        board.save(function (err) {
          if (err) {
            res.send(err);
          } else {
            res.json(board);
          }
        });
      }
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
