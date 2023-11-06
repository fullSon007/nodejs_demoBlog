
const express = require('express')
const router = express.Router()
const newsController = require('../app/controllers/NewsController');
const {requireSignin, isAdmin} = require('../app/midlewares/auth')
// cấu hình routes
router.get('/',requireSignin,isAdmin, newsController.index);


module.exports = router;