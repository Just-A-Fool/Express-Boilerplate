require('dotenv').config();
const {NODE_ENV} = require('./config');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'dev';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.get('/boilerplate', (req, res) => {
    res.status(200).json({ message: 'boilerplate' });
});


app.use(function errorHandler(error, req, res, next) {
    let response;
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } };
    } 
    else {
        console.error(error);
        response = { message: error.message };
    }
    res.status(500).json(response);
});


module.exports = app;