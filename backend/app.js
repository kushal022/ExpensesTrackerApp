const express = require('express');
const app = express();

require('dotenv').config();

const dbConnect = require('./config/dbConnect.js');
dbConnect();

const {errorHandler, notFound} = require('./middleware/errorMiddlewares.js')

//Middleware:
app.use(express.json())

//Home api:
app.get('/',(req,res)=>{
    res.json({'msg': 'Welcome Expense tacker API'})
})

//import routes:
const userRoute = require('./routes/users/usersRoute');

// Use Routes:
app.use('/api/user',userRoute);


// errorHandler
app.use(notFound);
app.use(errorHandler);



module.exports = app;

