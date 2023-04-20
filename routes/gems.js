var express = require('express');
var router = express.Router();

const gems_controlers= require('../controllers/gems');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gems', { title: 'Search Results gems' });
});
router.get('/detail',gems_controlers.gems_view_one_Page);

router.get('/create', gems_controlers.gems_create_Page);
router.get('/update', gems_controlers.gems_update_Page);
router.get('/delete', gems_controlers.gems_delete_Page);
module.exports = router;