const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})

passport.use(new GoogleStrategy({
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then((existingUser) => {
            if (existingUser)
            {
                done(null, existingUser);
            }
            else
            {
                new User({ googleId: profile.id})
                .save()
                .then(user => done(null,user));
            }
        })
        

}));

