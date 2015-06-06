var express = require('express');
var router = express.Router();

// Check for access_token in header. If present,
// start the OAuth2 server-side login flow.
router.use(function (req, res, next) {
  var accessToken = req.get('Authentication');
  if (accessToken) {
    console.log(accessToken);

    var User = require('../models/user');

    var fbOptions = {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://crudbrain.herokuapp.com/auth/facebook/callback'
    };

    if ('development' === app.get('env')) {
      fbOptions.callbackURL = 'http://localhost:5000/auth/facebook/callback';
    }

    // TODO: check database for token
    // ...

    // Only long-term tokens get put in database. If it's not there, it's
    // likely either a new user, a short-term token or both. In any case,
    // it needs a visit to FB's /oauth/access_token endpoint to check.
    req.crudbrain.access_token = exchangeToken(fbOptions);
    if (req.crudbrain.accessToken) {

    }

    next();
  }
});

function exchangeToken(fbOptions) {
}

module.exports = router;
