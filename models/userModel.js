const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type: String ,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        lowercase: true 
    },

    password : {
        type : String,
        min: 8 ,
        required : true
    },

    passwordConfirm :{
        type : String,
        required: [true, 'please confirm your password']
    }


})

const User = mongoose.model('User', userSchema)

module.exports = User;