const express = require('express');
const app = express();

require('dotenv').config();

const dbConnect = require('./config/dbConnect.js');
dbConnect();


//Middleware:
app.use(express.json())

//import routes:
const userRoute = require('./routes/users/usersRoute');

app.use('/',userRoute);

module.exports = app;

