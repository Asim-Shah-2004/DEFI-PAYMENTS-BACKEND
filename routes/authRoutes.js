const express = require('express');
const router = express.Router();
const Authcontroller = require('../controllers/authController');
const passport = require('passport');

router.get('/signup',Authcontroller.signup_get);
router.get('/login',Authcontroller.login_get);
router.post('/signup',Authcontroller.signup_post);
router.post('/login',Authcontroller.login_post);
router.get('/google',passport.authenticate('google',{ scope:['email','profile']}));
router.get('/google/callback',passport.authenticate('google',{failureRedirect: '/auth/login'}),(req,res) => {
    res.redirect('/home');
})

module.exports = router;