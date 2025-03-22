const expressAsyncHandler = require('express-async-handler'); // for handling errors this is 3rd party package
//Import Model: 
const UserModel = require('../../models/usersModel/usersModel');


//todo: ---------------------------------- Register User Controller -----------------------
const registerUserCtrl = expressAsyncHandler(async (req,res)=>{
    // const {} = req && req.body;  // or
    const {firstName,lastName,email,password} = req?.body; // this is optional chaining
    
        //check if user exists
        const isUserExists = await UserModel.findOne({email:req.body.email});
        if(isUserExists){
            // res.json('user Exist')
            throw new Error ('User already exists!!')
        }
        
        try {
            const newUser = await UserModel.create({
            email, firstName,lastName,password,isAdmin:req.body.isAdmin || false
        })

        res.status(200).json(newUser)

    } catch (error) {
        res.json(error);
        console.log(`Error in Register user`,error)
    }
})

//todo: ---------------------------------- Fetch All User Controller -----------------------
const fetchUsersCtrl = expressAsyncHandler(async (req,res)=>{
    try {
        const users = await UserModel.find({});
        res.json(users);
    } catch (error) {
        console.log('not fetch users', error)
        res.json(error)
    }
})


//todo: ---------------------------------- Login User Controller -----------------------
const loginUserCtrl = (req,res)=>{
    res.json('Hello user');
};

module.exports = {registerUserCtrl, loginUserCtrl, fetchUsersCtrl};