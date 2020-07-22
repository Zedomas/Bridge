let mongoose = require('mongoose')

let bridgeSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    bio: {type: String},
    status: {type: String},
    img: {type: String},
    friendsRequests: {type: Array},
    spotifyList: {type: Object},
    posts: {type: Object},
    inbox: {type: Object},
    friendList: {type: Array},
    youtubeList: {type: Object},

})


module.exports = mongoose.model('Bridge', bridgeSchema)