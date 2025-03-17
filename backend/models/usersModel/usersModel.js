const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
    firstName :{
        require:[true,"First Name is required"],
        type: String
    },
    lastName :{
        require:[true,"Last Name is required"],
        type: String
    },
    email :{
        require:[true,"Email is required"],
        type: String
    },
    password :{
        require:[true,"Password Name is required"],
        type: String
    },
    isAdmin :{
        type: Boolean,
        default: false
    },
    
},{Timestamp:true});

//compile schema into model

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;