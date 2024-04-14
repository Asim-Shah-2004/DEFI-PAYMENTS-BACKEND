require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session')
const cors = require('cors');
const PORT = 3000;
const bodyParser = require('body-parser');
const connectDB = require('./config/connectDB');
const errorHandler = require('./middlewares/errorHandle');
require('./controllers/oauthController');
const Authroutes = require('./routes/authRoutes');
const Homeroutes = require('./routes/homeRoutes')
const passport = require('passport');


connectDB();

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false, 
    saveUninitialized: false 
}));
    
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(bodyParser.json());
app.use(errorHandler);

app.use('/auth',Authroutes);
app.use(Homeroutes);

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})