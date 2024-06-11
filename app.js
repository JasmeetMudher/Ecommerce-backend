const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();


//Import routes

const productsRoute = require('./routes/products');
const usersRoute = require('./routes/orders');
//const {router} = require("express/lib/application");

//Use routes
app.use('/api/orders', usersRoute);
app.use('/api/products', productsRoute);

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type, Authorisation, Origin, X-Requested-With, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;
