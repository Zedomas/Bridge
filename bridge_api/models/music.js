let mongoose = require('mongoose')



let songSchema = new mongoose.Schema({
    title: {type:String},
    year: {type:String},
    image: {type:String},
    genre: {type:String},
    artist: {type:String},

})



let Songs= mongoose.model('Songs', songSchema)
module.exports = Songs