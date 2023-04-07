var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gems', { title: 'Search Results gems' });
});

module.exports = router;