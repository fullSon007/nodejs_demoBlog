const express = require('express')
const router = express.Router()
const loginController = require('../app/controllers/LoginController');

// cấu hình routes
router.post('/', loginController.login);


module.exports = router;