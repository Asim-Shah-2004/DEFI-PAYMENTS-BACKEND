const express = require('express');
const router = express.Router();

const authCheck = (req,res,next) => {
    if(!req.user)
    res.redirect('/auth/login');
    
    else{
        next();
    }
    
}

router.get('/home',authCheck,(req,res) => {
    res.send('Home Page');
})

module.exports = router;