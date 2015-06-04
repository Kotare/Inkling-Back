var express = require('express'),
    router = express.Router();

var Wombat = require('../models/wombat');

// GET /wombats
router.route('/wombats')

  .get(function (req, res) {
    Wombat.find(function (err, wombats) {
      if (err)
        res.send(err);

      res.json(wombats);
    });
  })

  .post(function (req, res) {
    var wombat = new Wombat();
    wombat.name = req.body.name;

    wombat.save(function (err) {
      if (err)
        res.send(err);

      res.json(wombat);
    });

  });

router.route('/wombats/:wombatId')

  .get(function(req, res) {
    Wombat.findById(req.params.wombatId, function (err, wombat) {
      if (err)
        res.send(err);
      res.json(wombat);
    });
  })

  .put(function (req, res) {
    Wombat.findById(req.params.wombatId, function (err, wombat) {
      if (err)
        res.send(err)

      wombat.name = req.body.name;

      wombat.save(function (err) {
        if (err)
          res.send(err);

        res.json(wombat);
      });
    });
  });

module.exports = router;
