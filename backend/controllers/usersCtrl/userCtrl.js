//Import Model: 
const UserModel = require('../../models/usersModel/usersModel');



const registerUser = async (req,res)=>{
    // const {} = req && req.body;  // or
    const {firstName,lastName,email,password} = req?.body; // this is optional chaining
    try {
        //check if user exists
        const isUserExists = await UserModel.findOne({email:req.body.email});
        if(isUserExists){
            res.json('user Exist')
        }

        const newUser = await UserModel.create({
            email, firstName,lastName,password
        })

        res.status(200).json(newUser)

    } catch (error) {
        res.json(error);
        console.log(`Error in Register user`,error)
    }
};
const loginUser = (req,res)=>{
    res.json('Hello user');
};

module.exports = {registerUser, loginUser};