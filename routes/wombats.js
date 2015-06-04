var express = require('express'),
    router = express.Router();

var Wombat = require('../models/wombat');

// GET /wombats
router.get('/wombats', function(req, res, next) {
  res.json({ message: 'Wombats: the only sane choice of marsupial.' });
});

module.exports = router;
