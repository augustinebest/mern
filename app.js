const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//require routes
const itemRoutes = require('./routes/item');

//Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mernCart', { useNewUrlParser: true }); 

//Body-parser Middleware
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Use routes
app.use('/item', itemRoutes);

module.exports = app;