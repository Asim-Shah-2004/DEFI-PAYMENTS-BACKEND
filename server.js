require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDB');
const errorHandler = require('./middlewares/errorHandle');
const Authroutes = require('./routes/authRoutes');

connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(errorHandler);
app.use(Authroutes);

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})