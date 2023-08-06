var mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        required:true,
        type: String,
        unique: true
    },
    passwordHash: {
        required:true,
        unique: true,
        type: String,
    },
    name: String,
    
    createdAt: {
      type: Date,
      default: Date.now,
    },

    role:{
type:String,
default:'user'

    }


  });
  
  const usersCollection = mongoose.model('users', userSchema);

module.exports = usersCollection