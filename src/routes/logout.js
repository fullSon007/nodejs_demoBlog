const express = require('express')
const router = express.Router()
const logoutController = require('../app/controllers/LogoutController');
const {requireSignin} = require('../app/midlewares/auth')
// cấu hình routes

// router.get('/', logoutController.ren);
router.post('/',requireSignin, logoutController.logout);


module.exports = router;