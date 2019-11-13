const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setheader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/email', require('./routes/emails'));

module.exports = app;