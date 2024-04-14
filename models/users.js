const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,  
    },
    email: {
    type: String,
   },
    password: {
        type: String,
    },
    googleID: {
        type: String,
    }},
{ collection: 'User' }); 

const User = mongoose.model("User", userSchema);
module.exports = User;

