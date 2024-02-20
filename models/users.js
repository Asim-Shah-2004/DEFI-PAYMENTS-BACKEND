const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username"],
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
    }
}, { collection: 'User' }); 

const User = mongoose.model("User", userSchema);

export default User;

