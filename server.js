var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    app         = express(),
    port        = process.env.PORT || 5000;

// Routes
var middleware  = require('./routes/middleware'),
    boards      = require('./routes/boards');

// Output (NB: must come BEFORE app.use(... routes))
app.use(bodyParser.json());

// Prefix (note no prefix for auth)
//app.use('/api/v1', middleware);
//app.use('/api/v1', boards);

// Temporary fake prefix for facebook testing
app.use('/fbtest', middleware);
app.use('/fbtest', boards);

// Static files in public
app.use(express.static(path.join(__dirname, 'public')));

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
