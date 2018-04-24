var express = require('express');
var router = express.Router();

var Chart = require('chart.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('team');
});

module.exports = router;
