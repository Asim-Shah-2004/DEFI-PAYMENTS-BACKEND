const User = require('../models/users');
const bcrypt = require('bcrypt');

module.exports.signup_post = async (req,res) => {
    const {name,email,password} = req.body;
    if(!name)
    return res.send({message: 'Please enter your name'})
    if (!email || !password)
    return res.send({ 'message': 'Email and password are required.' });

    const duplicate = await User.findOne({email});

    if(duplicate) 
    return res.send({message:"User already exists"});

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({name,email, password: hashedPassword});
    res.redirect('/home');
    }
    catch(err){
    res.status(400).send(err.message)
    }
}

module.exports.login_post = async (req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user)
    return res.status(400).send('No user found');

    if (!password) 
    return res.send('password is required.');
   if(user.password){
    const match = await bcrypt.compare(password,user.password);
    if(match){
        res.redirect('/home');
    }
    else{
        res.status(401).send('Password is incorrect');
    }}
    else{
        res.status(400).send('You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method.');
    }
    
}