const express = require('express');
const userRoute = express.Router();

//Import Controller: 
const {registerUser,loginUser} = require('../../controllers/usersCtrl/userCtrl');

// Register User Route:
userRoute.post('/register', registerUser )

// Login User Route:
userRoute.get('/login', loginUser )

module.exports = userRoute;