var express           = require('express'),
    router            = express.Router(),
    passport          = require('passport'),
    FacebookStrategy  = require('passport-facebook').Strategy,
    BearerStrategy    = require('passport-http-bearer').Strategy;

var User = require('../models/user');

router.post('/users',
  passport.authenticate('facebook', { session: false, scope: [] }),
  function (req, res) {
    var board = new Board();

    board.save(function (err) {
      if (err)
        res.send(err);

      res.json(board);
    });
  }

);

router.get('/auth/facebook/callback', 
           passport.authenticate('facebook', { session: false, failureRedirect: '/' }),
           function (req, res) {
             // Temp, in practice need to go back to API route?
             res.redirect('approved?access_token=' + req.user.access_token);
           }
);

module.exports = router;
