let mongoose = require('mongoose')

let bridgeSchema = new mongoose.Schema({
    username: {type:String, unique: true, required: true},
    password: {type:String, required: true},
    confirmpassword: {type:String,  required: true},
    email: {type: String, required: true}


})



let User= mongoose.model('User', userSchema)
module.exports= User