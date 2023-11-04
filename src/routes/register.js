const express = require('express')
const router = express.Router()
const registerController = require('../app/controllers/RegisterController');

// cấu hình routes

router.get('/', registerController.render);
router.post('/', registerController.register);


module.exports = router;