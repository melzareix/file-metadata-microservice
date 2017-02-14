const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');

const app = express();
const upload = multer({
    dest: './public/uploads/'
});

const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.render('index');
});


/**
 * Error handling Middleware
 */

app.use(function (err, req, res, next) {
    res.status(400).json({
        status: err.toString()
    });
});

app.use(function (req, res) {
    res.status(404).json({
        status: 'Invalid path.'
    });
});

app.listen(port, function () {
    console.log('Server running ....');
});