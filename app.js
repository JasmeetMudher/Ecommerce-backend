const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

// Import routes
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/orders');

// Apply CORS middleware
app.use(cors({
    origin: "*", // Allow all origins
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'Accept'] // Allow these headers
}));

// Logger middleware
app.use(logger('dev'));

// Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/orders', usersRoute);
app.use('/api/products', productsRoute);

module.exports = app;
