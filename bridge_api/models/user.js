let mongoose = require('mongoose')
// changed it from bridgeSchema to userSchema to match the export
let userSchema = new mongoose.Schema({
    username: {type:String, unique: true, required: true},
    password: {type:String, required: true},
    //removed confirm password, we can just compare if the two values are equal on the front end
    email: {type: String, required: true}


})



let User= mongoose.model('User', userSchema)
module.exports = User