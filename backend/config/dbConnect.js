const mongoose = require('mongoose');


const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB is connected....')
    } catch (error) {
        console.log('MongoDB is not connected....!',error)
    }
}

module.exports = dbConnect;