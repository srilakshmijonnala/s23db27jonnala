var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gems_controller = require('../controllers/gems');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// gems ROUTES ///
// POST request for creating a gems.
router.post('/gemss', gems_controller.gems_create_post);
// DELETE request to delete gems.
router.delete('/gemss/:id', gems_controller.gems_delete);
// PUT request to update gems.
router.put('/gemss/:id', gems_controller.gems_update_put);
// GET request for one gems.
router.get('/gemss/:id', gems_controller.gems_detail);
// GET request for list of all gems items.
router.get('/gemss', gems_controller.gems_list);
module.exports = router;