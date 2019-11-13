const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/email', require('./routes/emails'));

module.exports = app;