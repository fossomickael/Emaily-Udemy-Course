const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');


const app = express();
require('./routes/authRoutes')(app);
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.mongoURI);


  
const PORT = process.env.PORT || 5000 ;
app.listen(PORT);