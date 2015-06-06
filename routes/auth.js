var express           = require('express'),
    router            = express.Router();

var User = require('../models/user');

var fbOptions = {
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://crudbrain.herokuapp.com/auth/facebook/callback'
};

if ('development' === app.get('env')) {
  fbOptions.callbackURL = 'http://localhost:5000/auth/facebook/callback';
}

//passport.use(
  //new FacebookStrategy(fbOptions, function (accessToken, refreshToken, profile, done) {
    //User.findOrCreate({
      //facebookId: profile.id
    //}, function (err, result) {
      //if (result) {
        //result.access_token = accessToken;
        //result.save(function (err, doc) {
          //done(err, doc);
        //});
      //} else {
        //done(err, result);
      //}
    //});
  //})
//);

//passport.use(
  //new BearerStrategy(function (token, done) {
    //User.findOne({ 
      //access_token: token 
    //}, function (err, user) {
         //if (err) {
           //return done(err);
         //}
         //if (!user) {
           //return done(null, false);
         //}

         //return done(null, user, { scope: 'all' });
       //}
    //);
  //})
//);

router.post('/auth/facebook', 

);

router.get('/auth/facebook/callback', 
           function (req, res) {
             // Temp, in practice need to go back to API route?
             res.redirect('approved?access_token=' + req.user.access_token);
           }
);

module.exports = router;
