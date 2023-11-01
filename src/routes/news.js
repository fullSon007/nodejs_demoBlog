
const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController');

// cấu hình routes
router.use('/', newsController.index);


module.exports = router;