var express = require('express');
var router = express.Router();

// All requests
router.use(function(req, res, next) {
  console.log('Middleware 1');
  next();
});

router.use(function(req, res, next) {
  console.log('Middleware 2');
  next();
});

router.use(function(req, res, next) {
  console.log('Middleware 3');
  next();
});

module.exports = router;
