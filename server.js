var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    app         = express(),
    port        = process.env.PORT || 3000;

// Output (NB: must come before app.use(... routes))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
var middleware = require('./routes/middleware');
var wombats = require('./routes/wombats');

// Prefix
app.use('/api/v1', middleware);
app.use('/api/v1', wombats);


// Static files in public
app.use(express.static(path.join(__dirname, 'public')));

// Mongo
// MONGOLAB_URI: mongodb://heroku_app37522356:gks5qejjcpu7s9ufqmv2ko7u6n@ds043012.mongolab.com:43012/heroku_app37522356
if ('development' === app.get('env')) {
  mongoose.connect('mongodb://localhost/crudbrain');
} else {
  mongoose.connect('mongodb://' + process.env.MONGOLAB_URI + '/crudbrain');
}

// Start
app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
