require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const connectDB = require('./config/connectDB');
const errorHandler = require('./middlewares/errorHandle');

connectDB();

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})