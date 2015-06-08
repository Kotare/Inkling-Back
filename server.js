var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    app         = express(),
    port        = process.env.PORT || 5000;

// Routes
var facebookAuth  = require('./routes/facebookAuth'), 
    boards        = require('./routes/boards');

// Output (NB: must come BEFORE app.use(... routes))
app.use(bodyParser.json());

// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authentication, Content-Length');

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  }

  next();
});

app.use(function(req, res, next) {
  console.log(req.body);

  next();
});

// Prefix
app.use('/api/v1', facebookAuth);
app.use('/api/v1', boards);

// Static files in public
app.use('/', express.static(path.join(__dirname, 'public')));

// Mongo
if ('development' === app.get('env')) {
  mongoose.connect('mongodb://localhost/crudbrain');
} else {
  mongoose.connect('mongodb://' + process.env.MONGOLAB_URI + '/crudbrain');
}

// Start
app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
