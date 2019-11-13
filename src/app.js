const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use('/email', require('./routes/emails'));

module.exports = app;