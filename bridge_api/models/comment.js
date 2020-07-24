const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    message:String
})

module.exports = mongoose.model('Comment', commentSchema)