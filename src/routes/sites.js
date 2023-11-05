
const express = require('express')
const router = express.Router()
const sitesController = require('../app/controllers/SitesController');
// cấu hình routes

router.get('/home', sitesController.home)
router.get('/search', sitesController.search);
router.get('/', sitesController.frontface);

module.exports = router;