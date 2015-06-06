var express = require('express');
var router = express.Router();

// All requests
router.use(function(req, res, next) {
  console.log('Middleware sample...');
  next();
});

module.exports = router;
