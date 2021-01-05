import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   email: { 
       type: String, 
       required: true, 
       unique: true, 
       match:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/    
    },
   password: { type: String, required: true, minLength: 6 }  

})         

module.exports = mongoose.model('Users',userSchema); 