let mongoose = require('mongoose')



let HoopsSchema = new mongoose.Schema({
    homeTeam :{type:String},
    homeScore: {type:String},
    visitorTeam: {type:String},
    visitorScore: {type:String},
   
})



let Hoops= mongoose.model('Hoops', HoopsSchema)
module.exports = Hoops