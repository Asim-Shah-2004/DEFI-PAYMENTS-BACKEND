const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("connected to database successfully");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB