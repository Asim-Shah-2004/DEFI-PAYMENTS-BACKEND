const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require('../models/users');

passport.serializeUser((user,done) => {
    done(null,user.id);
})

passport.deserializeUser(async (id,done) => {
    const user = await User.findById(id)
    done(null,user);
})

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:'http://localhost:3000/auth/google/callback',
        
}, async (accessToken, refreshToken, profile, done) => {
    const user = await User.findOne({googleID: profile.id});
    if(!user){
        const newuser = await User.create({
            name: profile.displayName,
            email: profile.email,
            googleID: profile.id,
        })
        console.log(newuser);
        return done(null,newuser);}
        console.log(user);
        done(null,user);
        
    })
)