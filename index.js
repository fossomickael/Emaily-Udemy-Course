const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.mongoURI);


  
const PORT = process.env.PORT || 5000 ;
app.listen(PORT);