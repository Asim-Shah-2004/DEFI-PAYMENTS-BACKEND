const express = require('express');
const router = express.Router();
const Authcontroller = require('../controllers/authController');

router.get('/signup',Authcontroller.signup_get);
router.get('/login',Authcontroller.login_get);
router.post('/signup',Authcontroller.signup_post);
router.post('/login',Authcontroller.login_post);

module.exports = router;