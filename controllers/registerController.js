const User = require('../models/users');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.send({ 'message': 'Username and password are required.' });

    const duplicate = await User.findOne({username});

    if(duplicate) return res.send({message:"user already present"});

    

}

module.exports = handleNewUser;

module.exports = { handleNewUser };