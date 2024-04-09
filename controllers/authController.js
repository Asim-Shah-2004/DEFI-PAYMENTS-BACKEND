const User = require('../models/users');
const bcrypt = require('bcrypt');

module.exports.signup_get = (req,res) => {
res.send('sign up');
}

module.exports.signup_post = async (req,res) => {
    const {username,password} = req.body;
    if (!username || !password)
    return res.send({ 'message': 'Username and password are required.' });

    const duplicate = await User.findOne({username});

    if(duplicate) 
    return res.send({message:"user already exists"});

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({username, password: hashedPassword});
    res.status(201).json(user);
    }
    catch(err){
    res.status(400).send(err.message)
    }
}

module.exports.login_get = (req,res) => {
    res.send('login page');
}

module.exports.login_post = async (req,res) => {
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user)
    return res.status(400).send('No user found');

    if (!password) 
    return res.send('password is required.');

    const match = await bcrypt.compare(password,user.password);
    if(match){
    res.status(200).json(`User ${user} successfully logged in`);
    }
    else{
        res.status(401).send('Wrong Password');
    }
    
}