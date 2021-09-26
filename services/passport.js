const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const User = mongoose.model('users');

passport.use(new GoogleStrategy({
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
        new User({ googleId: profile.id}).save();

}));

