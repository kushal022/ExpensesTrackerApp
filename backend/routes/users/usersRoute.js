const express = require('express');
const userRoute = express.Router();

//Import Controller: 
const {registerUserCtrl,loginUserCtrl,fetchUsersCtrl} = require('../../controllers/usersCtrl/userCtrl');

// Register User Route:
userRoute.post('/register', registerUserCtrl )
// Fetch All User Route:
userRoute.get('/allusers', fetchUsersCtrl )

// Login User Route:
userRoute.post('/login', loginUserCtrl )

module.exports = userRoute;