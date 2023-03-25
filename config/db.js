const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URI);
      console.log(`successfully connected to database ${mongoose.connection.host}`.bgGreen.bgWhite);

    }
    catch(error){
        console.log('error in connecting db',error);
        
    }
}
module.exports = connectDb;