var express     = require('express'),
    bodyParser  = require('body-parser'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    app         = express(),
    port        = process.env.PORT || 3000;

// Routes
var middleware = require('./routes/middleware');
var wombats = require('./routes/wombats');

// Prefix
app.use('/api/v1', middleware);
app.use('/api/v1', wombats);

// Output
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files in public
app.use(express.static(path.join(__dirname, 'public')));

// Mongo
mongoose.connect('mongodb://localhost/crudbrain');

// Start
app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
