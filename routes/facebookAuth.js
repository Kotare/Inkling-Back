var express = require('express');
var router = express.Router();
var request = require('request');

router.use('/boards', facebookAuth); 
router.use('/boards/:id', facebookAuth);
           
function facebookAuth(req, res, next) {
  var inputToken = req.get('Authentication');
  if (inputToken) {

    // Check user status with Facebook
    request('https://graph.facebook.com/debug_token?' +
            'input_token=' + inputToken +
            '&access_token=' + process.env.FACEBOOK_APP_TOKEN, 
      function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var fbResponse = JSON.parse(response.body);
          if (fbResponse.data.is_valid) {
            req.fbUser = fbResponse.data.user_id;
            next();
          } else {
            res.status(401).json({ message: "Please login via Facebook to access this resource." });
          }
        }
      }
    );
  } //else {
  //   res.status(401).json({ message: "No access token provided." });
  // }
}

module.exports = router;
