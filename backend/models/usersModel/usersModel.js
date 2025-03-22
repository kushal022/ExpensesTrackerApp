const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

// Hash password
userSchema.pre('save', async function(next){
    // console.log('Am been Called')
    // console.log(this)
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//compile schema into model
const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;