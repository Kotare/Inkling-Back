var express = require('express');
var router = express.Router();
var request = require('request');

var fbOptions = {
  appToken: process.env.FACEBOOK_APP_TOKEN, 
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  //callbackURL: 'http://crudbrain.herokuapp.com/auth/facebook/callback'
};

//if ('development' === app.get('env')) {
  //fbOptions.callbackURL = 'http://localhost:5000/auth/facebook/callback';
//}

router.use('/fbtest/boards', facebookAuth);
router.use('/fbtest/boards/:id', facebookAuth);
           
function facebookAuth(req, res, next) {
  console.log("----- FACEBOOK MIDDLEWARE -----");
  var accessToken = req.get('Authentication');
  if (accessToken) {
    console.log(accessToken);

    // TODO: check database for token
    // ...

    // Only long-term tokens get put in database. If it's not there, it's
    // likely either a new user, a short-term token or both. In any case,
    // it needs a visit to FB's /oauth/access_token endpoint to check.
    var fbUser = checkToken(accessToken, fbOptions);
    if (fbUser) {
      console.log(fbUser);

      // TODO: create user object, save to database
      next();
    }
  }
}

function checkToken(accessToken, fbOptions) {
  request('http://graph.facebook.com/debug_token?' +
          'input_token=' + accessToken +
          '&access_token=' + fbOptions.appToken, 
    function (error, response, body) {
      if (!error && response.StatusCode === 200) {
        return JSON.parse(body);
      }
      return nil;
    }
  );
}

module.exports = router;
