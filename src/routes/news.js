
const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController');

// cấu hình routes
router.get('/', newsController.index);


module.exports = router;